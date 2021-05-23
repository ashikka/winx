/* eslint-disable no-useless-escape */
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const boxen = require('boxen');

const makeCLI = async (cliName, cliPath) => new Promise((resolve, reject) => {
  const myPath = path.join(cliPath, `/${cliName}`);
  const samplePath = path.join(__dirname, '..', 'your-cli');

  fs.copy(samplePath, myPath, (err) => {
    if (err) {
      reject(console.log(chalk.red(err)));
      return;
    }
    resolve(console.log(
      boxen(
        chalk.green(
          `CLI: ${chalk.yellow(cliName)} successfully created on path: ${chalk.yellow(cliPath)}`,
        ),
        { padding: 2, borderColor: 'yellow' },
      ),
    ));
  });
});

const showHelp = () => {
  const winx = "\n                       _ _ \n                      | (_)\n  __ _  ___ _ __   ___| |_ \n / _` |/ _ \\ '_ \\ / __| | |\n| (_| |  __/ | | | (__| | |\n \\__, |\\___|_| |_|\\___|_|_|\n  __/ |                    \n |___/                     \n";
  console.log(chalk.whiteBright(winx));
  console.log(boxen('Usage: winx <cli-name> <path>', { padding: 2, borderColor: 'yellow' }));
  console.log('Options:\r\n\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r \n\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n');
};

module.exports = { makeCLI, showHelp };
