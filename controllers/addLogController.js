var fs = require('fs-extra');
var path = require('path');

let addLogController = {};

addLogController.addLog = async function(fields, file){
  try {

    const logsPath = path.join(__dirname, '../', 'Logs')

    if(!fs.existsSync(path.join(logsPath, fields.folderName))) {
      
      fs.mkdirSync(path.join(logsPath, fields.folderName));
      
    }

    const tempPath = file.path;
    const fileName = file.name;

    fs.renameSync(tempPath, path.join(logsPath, fields.folderName, fileName));

  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
}

module.exports = addLogController;