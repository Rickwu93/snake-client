const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();


// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = function () {
//   if (handleUserInput === '\u0003'){ //ctrl + C to exit program
//     process.exit();
//   }
// };

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: "50541",
//   });

//   conn.on("connect", () => {
//     console.log('hello the server is running');
//   });


//   conn.on("data", (data) => {
//     console.log(data)
//   });

  
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
connect();

