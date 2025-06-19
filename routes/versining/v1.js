const express = require('express');
const router = express.Router();
const admin = require('../admin.js');
const client = require('../client.js');
 router.use('/admin', admin);
  router.use('/client', client);

// router.use('/admin', require('./routes/admin'));
// router.use('/client', require('./routes/client'));
module.exports = router;