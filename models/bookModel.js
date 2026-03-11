import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  author: String,
  price: Number,
  category: String
});

bookSchema.pre("save", async function () {

  if (this.isNew) {
    const lastBook = await this.constructor.findOne().sort({ id: -1 });
    this.id = lastBook ? lastBook.id + 1 : 1;
  }

});

export default mongoose.model("Book", bookSchema);