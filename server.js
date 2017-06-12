const express = require('express');
const proxy = require('http-proxy-middleware');
const pkg = require('./package.json')
const contApiProxy = require('./api/contributors.js')
const app = express();

/**
 * Setup API Router
 */
var apiRouter = express.Router();
apiRouter.get('/', function (req, res) {
    res.json({
        message: `LabCoat API`,
        version: `LabCoat API v${pkg.version}`,
        url: pkg.repository.url
    });
});

apiRouter.use('/contributors', contApiProxy);

// API Router
app.use('/api', apiRouter);

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + server.address().port);
});