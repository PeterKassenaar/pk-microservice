// routes.js
'use strict';

// 1. Import the controller, to specify the actions on
//  requested routes
const controller = require('../controllers/controller');

// 2. Enhance the passed in application with the routes
module.exports = app => {
    app.route('/about')
        .get(controller.about);

    // 2a. dynamic parameters, like http://localhost:3000/distance/10001/90001 (= New York to Los Angeles)
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
}
