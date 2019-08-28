let express = require('express');
let router = express.Router();
let addLogMessageController = require('../controllers/addLogMessageController');
let Const = require('../lib/consts')

router.post('/', async function(request, response){
  
  let {message, folderName, fileName} = request.fields

  if (message === undefined) return response.send({ 
    "code" : Const.responsecodeNoMessage,
    "time": Date.now()
  });

  if (!folderName) return response.send({ 
    "code" : Const.responsecodeNoFolderName,
    "time": Date.now()
  });

  if (!fileName) return response.send({ 
    "code" : Const.responsecodeNoFileName,
    "time": Date.now()
  });

  try {
    addLogMessageController.addLogMessage(message, folderName, fileName);
    
    return response.send({
      "code": Const.responsecodeSucceed,
      "time": Date.now()
    })
  } catch (error) {
    console.log(error);
    return response.send({
      "code": Const.httpCodeServerError,
      "time": Date.now()
    })
  }
})

module.exports = router;