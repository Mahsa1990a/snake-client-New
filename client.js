//A Separate Module For The TCP Connection

const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);//data show from server//client.write
  });

  return conn;
};

module.exports = { connect };