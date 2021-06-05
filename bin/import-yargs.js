/* eslint-disable global-require */
const chalk = require('chalk');

const importYargs = () => {
  try {
    const yargs = require('yargs');
    return yargs;
  } catch (e) {
    console.log(chalk.red(e));
    return process.exit(1);
  }
};

module.exports = importYargs();
