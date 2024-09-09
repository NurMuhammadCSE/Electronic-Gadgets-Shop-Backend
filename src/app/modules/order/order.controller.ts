import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderService } from "./order.service";
import { Request, Response } from "express";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const order = await orderService.createOrder(req.body, req.userId);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Order Created Successfully",
    data: order,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders Retrieved Successfully",
    data: orders,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const order = await orderService.getSingleOrder(orderId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Retrieved Successfully",
    data: order,
  });
});

const updateOrder = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const updates = req.body;
  const updatedOrder = await orderService.updateOrder(orderId, updates);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Updated Successfully",
    data: updatedOrder,
  });
});

const deleteOrder = catchAsync(async (req: Request, res: Response) => {
  const { orderId } = req.params;
  const result = await orderService.deleteOrder(orderId);

  sendResponse(res, {
    statusCode: httpStatus.NO_CONTENT,
    success: true,
    message: "Order Deleted Successfully",
    data: result,
  });
});

export const orderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
