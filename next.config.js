const webpack = require('webpack')
module.exports = {
  useFileSystemPublicRoutes: false,
    // available config
    serverRuntimeConfig: { // Will only be available on the server side
        mySecret: 'secret'
    },
    publicRuntimeConfig: { // Will be available on both server and client
        domain_api: 'http:/static'
    },
    build: {
        watch: [ "./routes/index.js",'server.js'],
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
    }
};