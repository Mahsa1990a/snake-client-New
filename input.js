
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key)); //using function with key parameter
  
  return stdin;
};

const handleUserInput = function(key) { //function to contrlo cntrl+c
  if (key === "w") {
    console.log("up");
  }
  if (key === "a") {
    console.log("left");
  }
  if (key === "s") {
    console.log("down");
  }
  if (key === "d") {
    console.log("right");
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput }; //don't need export handleUserInput, because only setupInput needs it.