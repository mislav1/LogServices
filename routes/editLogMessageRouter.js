let express = require('express');
let router = express.Router();
let Const = require('../lib/consts')

let editLogMessageController = require('../controllers/editLogMessageController');

router.post('/', async function(request, response){
  let {message, folderName, fileName} = request.fields

  if (!message) return response.send({ 
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
    
    editLogMessageController.editLogMessage(message, folderName, fileName);
    
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
