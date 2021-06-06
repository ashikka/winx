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
          `CLI: ${chalk.cyanBright.bold(cliName)} successfully created on path: ${chalk.cyanBright.bold(cliPath)}`,
        ), { padding: 2, borderColor: 'yellow' },
      ),
    ));
  });
});

const showHelp = () => {
  const winxCommand = chalk.cyanBright('winx');
  const options = chalk.greenBright.bold('<cli-name> <path>');
  const winx = `
██╗    ██╗██╗███╗   ██╗██╗  ██╗
██║    ██║██║████╗  ██║╚██╗██╔╝
██║ █╗ ██║██║██╔██╗ ██║ ╚███╔╝ 
██║███╗██║██║██║╚██╗██║ ██╔██╗ 
╚███╔███╔╝██║██║ ╚████║██╔╝ ██╗
 ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
`;
  console.log(chalk.blueBright(winx));
  console.log(boxen(`Usage: ${winxCommand} ${options}`, { padding: 2, borderColor: 'yellow' }));
  console.log(`Options:\r
\t--version\t      Show version number.\t\t[boolean]\r 
\t--help\t\t      Show help.\t\t\t[boolean]
`);
};

module.exports = { makeCLI, showHelp };
