import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema: Schema = new Schema<TOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model<TOrder>("Order", orderSchema);

export { Order };
