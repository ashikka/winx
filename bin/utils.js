const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');

const makeCLI = async (cliName, cliPath) => new Promise((resolve, reject) => {
  const myPath = path.join(cliPath, `/${cliName}`);
  fs.mkdir(myPath, (err) => {
    if (err) {
      reject(console.log(chalk.red(err)));
      return;
    }
    resolve(console.log(boxen(chalk.green(`CLI: ${chalk.yellow(cliName)} successfully created on path: ${chalk.yellow(cliPath)}`), { padding: 2, borderColor: 'yellow' })));
  });
});

const showHelp = () => {
  console.log(boxen('\nUsage: gen-cli <cli-name> <path>\r', { padding: 2, borderColor: 'yellow' }));
  console.log('\nOptions:\r \n\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r \n\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n');
};

module.exports = { makeCLI, showHelp };
