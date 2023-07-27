
const Todo = require('../../models/todoModel');

module.exports = async () => {
    try {
        const todos = await Todo.find().exec();

        if (!todos) throw new Error('Todos not found');

        return todos;
    } catch (error) {
        console.error(`[service] [${__dirname}]`, error);
        throw error;
    }
};
