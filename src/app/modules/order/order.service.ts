import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Product } from "../product/product.model"; // Import the Product model
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";

const createOrder = async (payload: TOrder, userId: JwtPayload) => {
  // Check if all products exist
  const productsExist = await Promise.all(
    payload.products.map(async (item: any) =>
      Product.exists({ _id: item.productId })
    )
  );

  if (productsExist.includes(null)) {
    throw new AppError(httpStatus.NOT_FOUND, "One or more products not found");
  }

  let totalPrice = 0;

  // Calculate the total price
  const productDetails = await Promise.all(
    payload.products.map(async (item: any) => {
      const product = await Product.findById(item.productId);
      if (product) {
        totalPrice += product.price * item.quantity;
        return {
          product: product._id,
          quantity: item.quantity,
        };
      } else {
        throw new Error("Product not found");
      }
    })
  );

  const order = new Order({
    user: userId,
    products: productDetails,
    totalAmount: totalPrice,
    status: "Pending",
  });

  await order.save();
  return order;
};


const getAllOrders = async () => {
  const orders = await Order.find().populate("user").populate("products");
  return orders;
};

const getSingleOrder = async (orderId: string) => {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate("products");

  if (!order) {
    throw new Error("Order not found.");
  }

  return order;
};

const updateOrder = async (orderId: string, updates: Partial<TOrder>) => {
  // Check if the order exists
  const order = await Order.findById(orderId);
  if (!order) {
    throw new Error("Order not found.");
  }

  // Check if all updated products exist (if product IDs are updated)
  if (updates.products) {
    const productsExist = await Promise.all(
      updates.products.map(async (productId) =>
        Product.exists({ _id: productId })
      )
    );

    if (productsExist.some((exists) => !exists)) {
      throw new Error("One or more products do not exist.");
    }
  }

  const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, {
    new: true,
  });

  return updatedOrder;
};

const deleteOrder = async (orderId: string) => {
  // Check if the order exists
  const order = await Order.findById(orderId);
  if (!order) {
    throw new Error("Order not found.");
  }

  const result = await Order.findByIdAndDelete(orderId);
  return result;
};

export const orderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
