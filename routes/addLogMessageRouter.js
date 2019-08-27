let express = require('express');
let router = express.Router();
let addLogMessageController = require('../controllers/addLogMessageController');
let Const = require('../lib/consts')

router.post('/', async function(request, response){
  
  let {message, folderName, fileName} = request.fields

  if (!message) return response.send({ 
    "error" : Const.responsecodeNoMessage,
    "time": Date.now()
  });

  if (!folderName) return response.send({ 
    "error" : Const.responsecodeNoFolderName,
    "time": Date.now()
  });

  if (!fileName) return response.send({ 
    "error" : Const.responsecodeNoFileName,
    "time": Date.now()
  });

  try {
    addLogMessageController.addLogMessage(message, folderName, fileName);
    
    return response.send({
      "code": 1,
      "time": Date.now()
    })
  } catch (error) {
    return response.send({
      "error": Const.httpCodeServerError,
      "time": Date.now()
    })
  }
})

module.exports = router;