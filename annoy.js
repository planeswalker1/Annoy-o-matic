// var answer = prompt("Are we there yet?");
//
// while(answer !== "yes") {
//   var answer = prompt("Are we there yet?");
// }
//
// alert("Yay, WE FINALLY MADE IT!!!");

// version 2
var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet?");
}

alert("Yay, WE FINALLY MADE IT!!!");
