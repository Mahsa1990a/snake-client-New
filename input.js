let connection; //creat connection between input and server
const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key, conn)); //using function with key parameter
  
  return stdin;
};

const handleUserInput = function(key, conn) { //function to contrlo cntrl+c
  if (key === "w") {
    //console.log("up");
    conn.write("Move: up");
  }
  if (key === "a") {
    //console.log("left");
    conn.write("Move: left");
  }
  if (key === "s") {
    //console.log("down");
    conn.write("Move: down");
  }
  if (key === "d") {
    //console.log("right");
    conn.write("Move: right");
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput }; //don't need export handleUserInput, because only setupInput needs it.