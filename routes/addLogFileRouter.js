let express = require('express');
let router = express.Router();
let addLogController = require('../controllers/addLogController');


router.post('/', async function(request, response){

  try {
    
    addLogController.addLog(request.fields, request.files.file);
  
    response.send({
      "ok": 1,
      "time": Date.now()
    })

  } catch (error) {
    
    response.send({error});
  }
})

module.exports = router;