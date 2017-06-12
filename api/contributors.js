const express = require('express');
const request = require('request-promise');
const router = express.Router();

const glApiVer = 'v4'
const glBaseUrl = `https://gitlab.com/api/${glApiVer}`

// contributors API proxy
const contOptions = {
    logLevel: 'debug',
    target: `${glBaseUrl}/projects/473568/repository/contributors`,
    changeOrigin: true,
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + process.env.API_KEY
    },
    pathRewrite: {
        '^/api': ''
    },
    secure: false,
    ssl: {
        rejectUnauthorized: false
    }
};


router.get('/', function (req, res) {
    request(`${glBaseUrl}/projects/473568/repository/contributors`)
        .then(function (response) {
            const contributors = JSON.parse(response);
            res.json(contributors);
        })
        .catch(function (err) {
            res.json({
                name: err.name,
                statusCode: err.statusCode,
                message: err.message,
                error: err.error
            });
        });
});


module.exports = router;