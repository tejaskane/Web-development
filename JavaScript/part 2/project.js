alert("Welcome to the SPY test");
var fn = prompt("plese enter your First name : ");
var ln = prompt("please enter your Last name : ");
var high = prompt("how tall are you? : ");
var age = prompt("how old are you? : ");
var pet = prompt("what is your pet name? : ");
alert("Thank you!")

if ((fn[0]==ln[0]) && (age >=20 && age <=30) && (high >= 170) && (pet.slice(-1)=='y')){
  console.log("Welcome comrade you passed the spy test!");
}else{
  console.log("There is nothing for you to see here!");
}
