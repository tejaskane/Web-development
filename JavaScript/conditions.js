var temp = 29;
var hot = true;

/*
if (temp>75){
  console.log("it is hot out there!");
}else{
  console.log("it is not so hot!");
}
*/

if (temp > 75){
  console.log("it is hot out there!");
}else if (temp>=50 && temp <=70) {
  console.log("it is average temprature outside!")
}else if (temp<50 && temp >=30) {
  console.log("it is a bit cold outside");
}else {
  console.log("It is very cold, grab a jacket!")
}
