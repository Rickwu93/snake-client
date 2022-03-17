const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Connected!');
    conn.write('Name: RW');
  });


  conn.on("data", (data) => {
    console.log('idled too long')
  });

  return conn;
};

module.exports = { connect };