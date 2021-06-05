#! /usr/bin/env node

const yargs = require('yargs');
const utils = require('./utils');

if (yargs.argv._[0]) {
  if (yargs.argv._[1]) {
    utils.makeCLI(yargs.argv._[0], yargs.argv._[1]);
  } else {
    utils.makeCLI(yargs.argv._[0], __dirname);
  }
} else {
  utils.showHelp();
}
