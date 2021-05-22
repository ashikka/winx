#! /usr/bin/env node
const yargs = require('yargs');
const utils = require('./utils');

const usage = '\nUsage: gencli <cli-name> <path>';

const options = yargs
  .usage(usage)
  .help(false)
  .argv;

if (yargs.argv.help) {
  utils.yourCLIHelp();
} else {
  console.log('Hello World!');
}
