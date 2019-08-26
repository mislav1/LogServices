var config = {};

config.mongoURI = {
  'development': 'mongodb://localhost:27017/logService',
  'test': 'mongodb://localhost:27017/logService-node-test'
};

module.exports = config;