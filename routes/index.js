let express = require('express');
let router = express.Router();

let addLogFileRouter = require('./addLogFileRouter');
let addLogMessageRouter = require('./addLogMessageRouter');

router.use('/addLogFile', addLogFileRouter);
router.use('/addLogMessage', addLogMessageRouter);

module.exports = router;