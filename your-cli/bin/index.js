#! /usr/bin/env node
const yargs = require('yargs');
const utils = require('./utils');

const usage = '\nUsage: gencli <cli-name> <path>';

const options = yargs
  .usage(usage)
  .help(true)
  .argv;

console.log('Hello World');
