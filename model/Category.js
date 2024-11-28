import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: {
    type: String,
    require: true,
  },
image:{
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

export const Category = mongoose.model("Category", categorySchema);
