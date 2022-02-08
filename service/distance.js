// distance.js
// 1. Import the request package to make API calls. There are alternatives!
// (like axios, got, and more. Search https://www.npmjs.com/ for more).
const request = require('request');

// 2. My key - Please register for your own key. You can store this in an environment variable for safety.
const apiKey = process.env.ZIPCODE_API_KEY ||
    "sSHNTiMLwwIUItZWXexJMVC7G2QM8hHwNu3D4y9n4glFwQL2qJltKk6tqjtp799G";

// 3. The API endpoint to talk to. You can store this in an environment variable for safety.
const zipCodeURL = process.env.ZIPCODE_API_URL ||
    'https://www.zipcodeapi.com/rest/';

// 4. The exported object with external API communication function (called 'find')
var distance = {
    find: (req, res, next) => {
        // 4a. use the request package
        request(zipCodeURL + apiKey +
            '/distance.json/' + req.params.zipcode1 + '/' +
            req.params.zipcode2 + '/km', // 4b. you can also calculate 'mile' if you want to
            (error, response, body) => {
                // 4c. All OK, send response. A simple object containing the found distance
                if (!error && response.statusCode === 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    // 4d. Oops, error. Send distance -1.
                    console.log(response.statusCode + response.body);
                    res.send({
                        distance: -1
                    });
                }
            });
    }
};

// 5. export the object w/ function
module.exports = distance;
