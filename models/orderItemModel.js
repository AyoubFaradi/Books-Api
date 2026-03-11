import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
{
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },

  quantity: {
    type: Number,
    required: true,
    default: 1
  },

  price: {
    type: Number,
    required: true
  }
}
);

export default mongoose.model("OrderItem", orderItemSchema);