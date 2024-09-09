import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/create", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/product/:id", productController.getSingleProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export const ProductRoutes = router;
