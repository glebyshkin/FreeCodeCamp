// task 41
var myList = [
    ["Coca-Cola", 2],
    ["Pepsi-Cola", 3],
    ["Fanta", 4],
    ["Sprite", 5],
    ["Mirinda", 6]
    ];

    // task 42
    function reusableFunction() {
        console.log("Hi World");
      }
      reusableFunction();

// task 43

function functionWithArgs(param1,param2){
    console.log(param1+param2);
  }
  functionWithArgs(1,2);
  functionWithArgs(7,9);

  // task 44
  // Declare the myGlobal variable below this line
var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// task 45
function myLocalScope() {
    // Only change code below this line
  var myVar
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
    // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);