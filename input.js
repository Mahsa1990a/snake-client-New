
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key)); //using function with key parameter
  
  return stdin;
};

const handleUserInput = function(key) { //function to contrlo cntrl+c
  
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput,  handleUserInput };