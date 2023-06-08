const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');

/* GET home page */
router.get('/', index_controller.render_index_page);

/* POST new message*/
router.post('/new', index_controller.add_new_message);

module.exports = router;
