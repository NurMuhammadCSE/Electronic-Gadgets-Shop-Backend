import express from "express";
import { productController } from "./product.controller";
import { reviewController } from "../review/review.controller";

const router = express.Router();

router.post("/create", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/product/:id", productController.getSingleProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

//! Reviews
router.post("/:productId/review", reviewController.addReview);
router.get("/:productId/review", reviewController.getReviewsByProductId);

export const ProductRoutes = router;
