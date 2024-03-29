/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
console.log("Using while loop");
var num = 0;
while(num<5){
  console.log("Hello");
  num++;
}

// For Loop
console.log("Using for loop");
for (var i = 0; i < 5; i++) {
  console.log("Hello");
}

/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
console.log("Using while loop odd numbers 1-25");
var newNum=1;
while(newNum<26){
  if(newNum%2===1){
    console.log(newNum);
  }
  newNum++;
}

// METHOD TWO
// For Loop
console.log("Using For loop odd numbers 1-25");
for(var j = 1; j < 26; j=j+2){
  console.log(j);
}
