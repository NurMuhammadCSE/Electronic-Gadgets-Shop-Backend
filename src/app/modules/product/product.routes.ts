import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/create", productController.createProduct);

export const ProductRoutes = router;
