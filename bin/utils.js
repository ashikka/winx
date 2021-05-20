const fs = require('fs');
const path = require('path');

const usage = '\nUsage: gen-cli <cli-name> <path>';

const makeCLI = async (cliName, cliPath) => new Promise((resolve, reject) => {
  const myPath = path.join(cliPath, `/${cliName}`);
  fs.mkdirSync(myPath, (err) => {
    if (err) {
      reject(console.log(err));
      return;
    }
    resolve(console.log(`${cliName} successfully created`));
  });
});

const showHelp = () => {
  console.log(usage);
  console.log('\nOptions:\r');
  console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r');
  console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n');
};

module.exports = { makeCLI, showHelp };
