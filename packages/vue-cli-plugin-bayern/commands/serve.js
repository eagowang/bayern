const { info, openBrowser, IpcMessenger } = require('@vue/cli-shared-utils');

// const defaults = {
//   host: '0.0.0.0',
//   port: 8080,
//   https: false,
// };

module.export = (api, options) => {
  api.registerCommand(
    'bayern-serve',
    {
      description: 'start development server',
      usage: 'vue-cli-service bayern-serve [options] [entry]',
      options: {
        '--open': 'open browser on server start',
        // '--copy': 'copy url to clipboard on server start',
        // '--mode': 'specify env mode (default: development)',
        // '--host': `specify host (default: ${defaults.host})`,
        // '--port': `specify port (default: ${defaults.port})`,
        // '--https': `use https (default: ${defaults.https})`,
        // '--public': 'specify the public network URL for the HMR client',
        // '--auto-host': 'specify automator host',
        // '--auto-port': 'specify automator port',
      },
    },
    async function serve(args) {
      info('Starting development server...');
    }
  );
};
