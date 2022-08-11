function sum(a, b) {
  return a + b;
}

function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(2, 2, sum));

// setTimeout(() => {
//   console.log("klk!");
// }, 2000);

function grettin(name) {
  console.log(`Hola ${name}`);
}

setTimeout(grettin, 1000, "paco");
