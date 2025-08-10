const express = require('express');
const router = express.Router();
const { getEvents } = require('../controllers/eventsController');

// GET /api/events
router.get('/', getEvents);

module.exports = router;
