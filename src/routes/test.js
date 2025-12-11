var express = require('express');
var router = express.Router();

const testController = require('../app/controllers/TestController');

// TestController.index

router.get('/hocnodejs', testController.show);
router.get('/', testController.index);

module.exports = router;
