const express = require('express');

const router = express.Router();

const {
    list,
} = require('../controllers/todoController');

router.get('/', list);

module.exports = router;
