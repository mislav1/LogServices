let express = require('express');
let router = express.Router();
let addLogController = require('../controllers/addLogController');
let Const = require('../lib/consts')

router.post('/', async function(request, response){

  if (!request.fields.folderName) return response.send({ 
    "error" : Const.responsecodeNoFolderName,
    "time": Date.now()
  });

  if (!request.files.file) return response.send({ 
    "error" : Const.responsecodeNoFile,
    "time": Date.now()
  });

  try {
    
    addLogController.addLog(request.fields, request.files.file);
  
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