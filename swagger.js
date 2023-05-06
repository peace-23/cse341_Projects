const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Student Data',
    description: 'The data provided includes information about students and courses',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

// const outputFile = './path/swagger-output.json';
// const endpointsFiles = ['./path/endpointsUser.js', './path/endpointsBook.js'];

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);