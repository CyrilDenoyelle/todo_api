const listTodos = require('../../services/todos/list');

module.exports = async (req, res) => {
    try {
        const todos = await listTodos(req.user);

        res.status(200).json({
            success: true,
            message: 'Todos fetched successfully',
            todos,
        });
    } catch (error) {
        console.error(`[controllers] [${__dirname}]`, error);
        throw error;
    }
};
