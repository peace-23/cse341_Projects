const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const cors = require('cors');


const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use('/', require('./routes'))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
  .use(cors({ origin: '*' }));

// process.on("uncaughtException", (err, origin) => {
//   console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
// });

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to data and running on port ${port}`);
  }
}); 