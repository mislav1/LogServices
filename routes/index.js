let express = require('express');
let router = express.Router();

let addLogFileRouter = require('./addLogFileRouter');
let addLogMessageRouter = require('./addLogMessageRouter');
let editLogMessageRouter = require('./editLogMessageRouter');

router.use('/addLogFile', addLogFileRouter);
router.use('/addLogMessage', addLogMessageRouter);
router.use('/editLogMessage', editLogMessageRouter);

module.exports = router;