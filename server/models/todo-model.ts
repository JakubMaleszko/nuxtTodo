import mongoose from "../plugins/mongoose";
import { model, Schema } from "mongoose";

const todoSchema = new Schema({
    title: String,
    completed: Boolean
});

export const Todo = model('Todo', todoSchema);