import { Todo } from "../models/todo-model";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const todo = new Todo({
        title: body.title,
        completed: false
    });
    await todo.save();
});