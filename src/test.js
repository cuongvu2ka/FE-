var array = ["react", "node", "angular"];
var array2 = ["ab", "bc", "dc"];
function logger(...rest) {
  for (var i = 0; i < rest; i++) {
    console.log(rest[i]);
  }
}
