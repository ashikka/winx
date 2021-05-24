const chalk = require('chalk');
const boxen = require('boxen');

const yourCLIUtility = async () => {
  /*
  This function serves as a utlity you can add to your CLI.
  Use this space to add cool features!
  */

  console.log('Hello World!');
};

const yourCLIHelp = async () => {
  /*
  Write you help menu display function here.
  You can make a custom menu like this one or use the one yargs provides.
  */

  console.log(boxen('\nUsage: your-cli <options> <inputs> ', { padding: 2, borderColor: 'yellow' }));
  console.log('\nOptions:\r \n\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r \n\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n');
};

module.exports = { yourCLIHelp, yourCLIUtility };
