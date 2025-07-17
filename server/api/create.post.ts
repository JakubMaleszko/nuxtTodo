import { Todo } from "../models/todo-model";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const todo = new Todo({
        title: body.title,
        completed: false
    });
    try {
    await todo.save();
    return;
    }
    catch {
        throw createError({ statusCode: 500, message: 'Error creating todo' });
    }
});