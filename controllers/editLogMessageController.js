var fs = require('fs-extra');
var path = require('path');
let Const = require('../lib/consts')
let editLogMessageController = {}

editLogMessageController.editLogMessage = async function(message, folderName, logName){
  try {
    const logsPath = Const.logPath;

    if(!fs.existsSync(path.join(logsPath, folderName))) {
      
      fs.mkdirSync(path.join(logsPath, folderName));
      
    }

    if(!fs.existsSync(path.join(logsPath, folderName, logName))){
      fs.writeFileSync(path.join(logsPath, folderName, logName), message, function(error){
        if(error){
          throw new Error(error);
        }
      })
    } else {
      if(message){
        fs.appendFileSync(path.join(logsPath, folderName, logName), '\r\n' + message);
      }
    }

  } catch (error) {
    throw new Error(error);
  }
}

module.exports = editLogMessageController;