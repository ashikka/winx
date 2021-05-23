#! /usr/bin/env node
const yargs = require('yargs');
const utils = require('./utils');

const usage = '\nUsage: makecli <cli-name> <path>';

const options = yargs
  .usage(usage)
  .help(false)
  .argv;

if (yargs.argv._[0] && yargs.argv._[1]) {
  utils.makeCLI(yargs.argv._[0], yargs.argv._[1]);
} else {
  utils.showHelp();
}

if (yargs.argv.help) {
  utils.showHelp();
}
