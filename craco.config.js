const path = require('path');
const setupDevServer = require('./plugins/visual-edits/dev-server-setup');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    devServer: (devServerConfig) => {
        return setupDevServer(devServerConfig);
    },
};
