'use strict';

const initServeCommand = require('./commands/serve');
// const initBuildCommand = require('./commands/build');

module.exports = (api, options) => {
  initServeCommand(api, options);
  // initBuildCommand(api, options);
};
