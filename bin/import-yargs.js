/* eslint-disable global-require */
const importYargs = () => {
  try {
    const yargs = require('yargs');
    return yargs;
  } catch (e) {
    console.log(e.message);
    return process.exit(1);
  }
};

module.exports = importYargs();
