function callback(x) {
  console.log(x);
}

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction(receivesAFunction) {
  receivesAFunction();
}