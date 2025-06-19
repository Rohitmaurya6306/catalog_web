const express = require('express');
const router = express.Router();
const v1 = require('./versining/v1')
router.use('/v1', v1)

//  router.use('/admin', require('./admin'));
// router.use('/client', require('./client'));
module.exports = router;
