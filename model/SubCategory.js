import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  title: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending",
  },
});

export const SubCategory = mongoose.model("SubCategory", subcategorySchema);
