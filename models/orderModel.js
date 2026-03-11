import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
{
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true
  },

  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItem"
    }
  ],

  totalPrice: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    default: "pending"
  }
},
{ timestamps: true }
);

export default mongoose.model("Order", orderSchema);