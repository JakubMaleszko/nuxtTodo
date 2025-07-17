import { Todo } from "../models/todo-model"

export default defineEventHandler((event) => {
    try {
        const todos = Todo.find();
        return todos;
    }
    catch (err) {
        console.log(err);
        throw createError({ statusCode: 500, statusMessage: 'Failed to fetch data' });
    }
})