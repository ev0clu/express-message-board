const express = require('express');
const router = express.Router();

const new_controller = require('../controllers/newController');

/* GET new message page */
router.get('/', new_controller.render_new_page);

module.exports = router;
