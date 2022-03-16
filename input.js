

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => { 	handleUserInput(key)});
  return stdin;
};

const handleUserInput = function (key) {
  console.log(key)
  if (key === '\u0003'){ //ctrl + C to exit program
    process.exit();
  }
};

module.exports = { setupInput };