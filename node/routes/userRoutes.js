const express = require('express');
const { getalluser, addCount, getCountStats } = require('../controller/userController');

const router = express.Router();

router.get('/', getalluser);
router.post('/', addCount);
router.get('/stats', getCountStats);  // New route to fetch total count & past 3 days data

module.exports = router;
