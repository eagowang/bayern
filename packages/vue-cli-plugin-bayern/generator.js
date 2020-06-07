module.exports = (api, options, rootOptions) => {
  const mainVersion = require('./package.json').version;
  const version = '^' + mainVersion;
  api.extendPackage((pkg) => {
    delete pkg.postcss;
    delete pkg.browserslist;
    return {
      scripts: {
        'dev:h5':
          'cross-env NODE_ENV=development BAYERN_PLATFORM=h5 vue-cli-service uni-serve',
      },
      dependencies: {},
      devDependencies: {
        'vue-cli-plugin-bayern': version,
      },
      browserslist: ['Android >= 4', 'ios >= 8'],
    };
  });
};
