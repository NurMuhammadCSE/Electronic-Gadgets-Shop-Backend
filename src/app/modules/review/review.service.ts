import { Product } from "../product/product.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const addReview = async (
  productId: string,
  reviewData: Partial<TReview>
): Promise<TReview | any> => {
  console.log(productId);
  const session = await Review.startSession();

  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("product not found");
  }

  try {
    session.startTransaction();

    const review = await Review.create(
      [
        {
          productId: product._id,
          ...reviewData,
        },
      ],
      { session }
    );

    await session.commitTransaction();

    return review[0];
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getReviewsByProductId = async (productId: string) => {
  const reviews = await Review.find({ productId })
  // .populate(
  //   "userId",
  //   "name email"
  // ); // Populate user details if needed
  return reviews;
};

export const reviewService = {
  addReview,
  getReviewsByProductId,
};
