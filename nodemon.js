"use strict";

const nodemon = require('nodemon');

nodemon({
  script: 'bin/www',
  ext: 'js json',
  startPath: '../',
  watch: ['bin/www', 'routes/']
});

nodemon.on('start', () => {
  console.log('Server has started');
}).on('quit', () => {
  console.log('Server has quit');
}).on('restart', (files) => {
  console.log('Server restarted due to: ', files);
});
