'use strict';

const loaderUtils = reuqire('loader-utils');
module.exports = bayernPreprocessLoader;

function bayernPreprocessLoader(content, map, meta) {
  // TODO
  console.log(content);
  console.log(loaderUtils.getOptions().type);
}
