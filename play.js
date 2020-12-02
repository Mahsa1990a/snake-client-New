//connecting to server

const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key)); //using function with key parameter
  
  return stdin;
};
setupInput();

const handleUserInput = function(key) { //function to contrlo cntrl+c
  
  if (key === '\u0003') {
    process.exit();
  }
};
handleUserInput();
