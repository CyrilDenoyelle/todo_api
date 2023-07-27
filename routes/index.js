
const express = require('express');

const router = express.Router();

const todoRouter = require('./todos');

router.use('/todos', todoRouter);

module.exports = router;
