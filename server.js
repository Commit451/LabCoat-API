const express = require('express');
const app = express();

/**
 * Setup API Router
 */
const apiRouter = express.Router();
apiRouter.get('/', function (req, res) {
    res.json({
        message: `LabCoat API`,
        url: `https://github.com/Commit451/LabCoat-API`
    });
});

// the id of the element within the webpage to look for
apiRouter.get('/login-element-id', function (req, res) {
    res.json({
        "elementId": `private-token`,
    });
});

// API Router
app.use('/api/v1', apiRouter);

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + server.address().port);
});