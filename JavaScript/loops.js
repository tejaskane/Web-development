var num = 0;

while (num<5){
  console.log("Number = "+num);
  if(num===3){
    console.log("breaking the loop using break");
    break;
  }
  num = num + 1;
}
console.log('out of loop');
console.log("")
var even = 1
console.log("Here is list of all even numbers");
while (even<=10)
{
  if(even%2===0){
  console.log(even);
}
  even=even+1
}
console.log("")
console.log("Start of for loop");
for(var i = 0; i < 3; i++){
  console.log('Num is '+i);
}
console.log("");
var word="ABC";
for(i=0; i<word.length; i++){
  console.log(word[i]);
}
console.log("");
var wordd="123456789";
for(i=1; i<wordd.length; i=i+2){
  console.log(wordd[i]);
}
