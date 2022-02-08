// Credits: https://fauna.com/blog/how-to-build-microservices-with-node-js
// server.js

// 1. Import and create express() application with CORS enabled
//   If you DON'T want CORS, host the client application inside the express application
//   using middleware.
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()) // enable CORS on all routes

// 2. Import routes and pass in the created app to bind the
// routes to the app.
const routes = require('./api-routes/routes');
routes(app);

// 3. Create a port to listen to
const port = process.env.PORT || 3000;

// 4. Start the server on the given port
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
