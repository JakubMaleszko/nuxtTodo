import { Todo } from "../models/todo-model";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
    await Todo.deleteOne({_id: body.id});
    } catch {
        throw createError({ statusCode: 500, message: 'Error deleting todo' });
    }
});