const nodemon = require('nodemon');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Ensure environment variables are read.
require('../config/env');

const paths = require('../config/paths');

nodemon({
  script: paths.appServerJs,
  ext: 'js json'
});

nodemon.on('start', () => {
  console.log('Server has started');
}).on('quit', () => {
  console.log('Server has quit');
  process.exit();
}).on('restart', files => {
  console.log('Server restarted due to: ', files);
});
