var fs = require('fs-extra');
var path = require('path');
let Const = require('../lib/consts')

let addLogMessageController = {};

addLogMessageController.addLogMessage = async function(message, folderName, logName){
  try {
    const logsPath = Const.logPath;

    if(!fs.existsSync(path.join(logsPath, folderName))) {
      
      fs.mkdirSync(path.join(logsPath, folderName));
      
    }

    fs.writeFileSync(path.join(logsPath, folderName, logName), message, function(error){
      if(error){
        throw new Error(error);
      }
    })
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = addLogMessageController;