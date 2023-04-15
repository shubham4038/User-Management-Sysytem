const express = require('express');
const converter = require('../controller/converter');
const router = express.Router();


router.route('/convertData').get(converter.exportData);

module.exports=router;