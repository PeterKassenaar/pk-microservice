// controller.js
'use strict';

// 1. Import the correct files
const properties = require('../package.json');
const distance = require('../service/distance');

// 2. Specify methods on this controller
var controllers = {
    // 2a. Use package.json to show information.
    about: (req, res) => {
        var aboutInfo = {
            name: properties.name,
            version: properties.version,
        }
        res.json(aboutInfo);
    },

    // 2b. Use the imported distance object
    // to calculate actual distance and send to client.
    getDistance: (req, res) => {
        distance.find(req, res, (err, dist) => {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
};

// 3. export the controller
module.exports = controllers;
