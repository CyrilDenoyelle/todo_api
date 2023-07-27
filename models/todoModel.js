const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
        default: 'todo',
        enum: ['todo', 'done']
    }
}, {
    collection: 'todos',
}, {
    timestamps: true,
});

module.exports = mongoose.model('Todo', todoSchema);
