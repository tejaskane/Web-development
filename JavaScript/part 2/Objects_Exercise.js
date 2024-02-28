// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var emp = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function(){
    return this.name.length;
  }
};
alert('length of '+emp.name+' is '+emp.nameLength());
// Add a method called nameLength that prints out the
// length of the employees name to the console.


///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var empAlert = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  myAlert: function(){
    alert('Name is '+this.name);
    alert('Job is '+this.job);
    alert('Age is '+this.age);
  }
};
empAlert.myAlert();

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    var fullname = this.name.split(' ');
    alert("employee's last name is "+fullname[1]);
  }
};
employee.lastName();


// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
