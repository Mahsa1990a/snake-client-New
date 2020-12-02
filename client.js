// //A Separate Module For The TCP Connection

const net = require('net');
const { HOST, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    HOST,
    PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    //conn.write("from client: Successfully connected to game server");
    console.log("From client: Successfully connected to game server"); //print msg for players

    //conn.write("Move: up"); //after connecting do move up(I used existing connect callback, but we can creat new one)
     // setTimeout(() => conn.write("Move: up"), 1000) , ...
    let movement = ["Move: up","Move: up", "Move: left", "Move: left", "Move: down", "Move: down", "Move: right", "Move: right"]
    let timeOut = 1000;
    for (let i = 0 ; i < movement.length; i++){
      setTimeout(() => {
        conn.write(`${movement[i]}`);
      }, timeOut);
      timeOut += 2000
      // setTimeout(() => {
      //   conn.write(`${movement[i]}`);
      // }, timeOut);
      // timeOut += 2000
    }
  });

  conn.write("Name: Mah"); //syntax send data from client to server

  conn.on('data', (data) => {
    console.log('Server says: ', data);//data show from server//client.write
  });

  return conn;
};

module.exports = { connect };