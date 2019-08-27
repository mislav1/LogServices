let express = require('express');
let router = express.Router();
let addLogMessageController = require('../controllers/addLogMessageController');
let Const = require('../lib/consts')

router.post('/', async function(request, response){
  
  let {message, folderName, fileName} = request.fields

  if (!message) return response.send({ "errorCode" : Const.responsecodeNoMessage });

  if (!folderName) return response.send({ "errorCode" : Const.responsecodeNoFolderName });

  if (!fileName) return response.send({ "errorCode" : Const.responsecodeNoFileName });

  try {
    addLogMessageController.addLogMessage(message, folderName, fileName);
    
    return response.send({
      "ok": 1,
      "time": Date.now()
    })
  } catch (error) {
    return response.send({
      error,
      "time": Date.now()
    })
  }
})

module.exports = router;