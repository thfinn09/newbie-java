var express = require('express');
var router = express.Router();

const testController = require('../app/controllers/TestController');

// TestController.index

router.use('/hocnodejs', testController.show);
router.use('/', testController.index);


module.exports = router;