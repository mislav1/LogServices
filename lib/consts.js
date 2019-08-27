var path = require('path');

var Const = {}

Const.responsecodeNoMessage = 400000;
Const.responsecodeNoFolderName = 400005;
Const.responsecodeNoFileName = 400010;
Const.responsecodeNoFile = 400015;
Const.httpCodeServerError = 500;
Const.responsecodeSucceed = 1;

Const.logPath = path.join(__dirname, '../', 'Logs');

module.exports = Const;