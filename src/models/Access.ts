import mongoose from "mongoose";

const AccessSchema = new mongoose.Schema({
  ip: String,
  accessedAt: Date,
  count: Number,
});

export default mongoose.model("Access", AccessSchema);
