let express = require('express');
let router = express.Router();
let addLogController = require('../controllers/addLogController');
let Const = require('../lib/consts')

router.post('/', async function(request, response){

  if (!request.fields.folderName) return response.send({ 
    "code" : Const.responsecodeNoFolderName,
    "time": Date.now()
  });

  if (!request.files.file) return response.send({ 
    "code" : Const.responsecodeNoFile,
    "time": Date.now()
  });

  try {
    
    addLogController.addLog(request.fields, request.files.file);
  
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