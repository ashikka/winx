const chalk = require('chalk');
const boxen = require('boxen');

const yourCLIUtility = async () => {

  // Write cool code here

};

const yourCLIHelp = async () => {
  console.log(boxen('\nUsage: your-cli <options> <inputs> ', { padding: 2, borderColor: 'yellow' }));
  console.log('\nOptions:\r \n\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r \n\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n');
};

module.exports = { yourCLIHelp, yourCLIUtility };
