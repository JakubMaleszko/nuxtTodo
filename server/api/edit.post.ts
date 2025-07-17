import { Todo } from "../models/todo-model";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body.id) {
        throw createError({ statusCode: 400 });
    }
    const updateData = {
        title: undefined,
        completed: undefined
    };
    if (body.title !== undefined) updateData.title = body.title;
    if (body.done !== undefined) updateData.completed = body.done;
    try {
        await Todo.findByIdAndUpdate(
            body.id,
            updateData
        );
    } catch {
        throw createError({ statusCode: 500, message: 'Error updating todo' });
    }
});