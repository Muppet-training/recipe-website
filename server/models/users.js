import mongoose from "mongoose";
const Schema = mongoose.Schema;
const User = new Schema({
    title: { type: String, required: true },
    receipe: { type: String, required: true },
    ingrediants: { type: String, required: true },
});

export default mongoose.model("User", User);