let express = require('express');
let router = express.Router();
let addLogMessageController = require('../controllers/addLogMessageController');

router.post('/', async function(request, response){
    console.log(request.fields);
    try {
      addLogMessageController.addLogMessage(request.fields.message, request.fields.folderName, request.fields.fileName);
      response.send({
        "ok": 1,
        "time": Date.now()
      })
    } catch (error) {
      response.send({
        error,
        "time": Date.now()
      })
    }
})

module.exports = router;