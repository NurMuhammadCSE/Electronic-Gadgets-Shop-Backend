import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./product.service";
import { Request, Response } from "express";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product Created successfully",
    data: product,
  });
});

export const productController = {
  createProduct,
};
