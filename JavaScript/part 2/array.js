myarr = ['a','b','c'];

// while loop
num = 0;
while(num<myarr.length){
  console.log(myarr[num]);
  num++;
}
console.log('');

// for loop
for(var i=0;i<myarr.length;i++){
  console.log(myarr[i]);
}
console.log('');

// for of
for(letter of myarr){
  console.log(letter);
}
console.log('');

// pop()
var delItem = myarr.pop();
console.log('After pop '+myarr);
console.log('');

//push()
myarr.push(delItem);
console.log('after push '+myarr);
console.log("");

// foreach
myarr.forEach(console.log);
console.log('');

function addAwesome(name){
  console.log(name+' add awesome');
}
var topics = ['python', 'HTML', 'JavaScript'];
topics.forEach(addAwesome);
