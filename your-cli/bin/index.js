#! /usr/bin/env node
const yargs = require('yargs');
const utils = require('./utils');

/*
After successful creation of your CLI, follow these steps:

1. Navigate to the directory where you CLI is
1. In the package.json file, chnage the **name** of your CLI.
2. In the same file, inside the key **bin**, change the key of
subjson from your-cli to the name of your CLI.
3. Run npm i -g command
4. Start making a cool CLI!
*/

const options = yargs
  .help(false)
  .argv;

if (yargs.argv.help) {
  utils.yourCLIHelp();
} else {
  utils.yourCLIUtility();
}
