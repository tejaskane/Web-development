// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name){
  roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(name){
  var index = roster.indexOf(name);
  roster.splice(index,1);
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
  console.log(roster);
}

// Start by asking if they want to use the web app
var action=prompt('Would you like to start the roster app (y,n)');
if(action == 'n' || action =='N'){
  alert('Good bye!')
}
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while(action=='y'||action=='Y'){
  var q = prompt('Please select an action (add,remove, display or quit)');
  if(q=='add'){
    var adder = prompt('Enter the name to be added');
    addNew(adder)
  }else if(q=='remove') {
    var remover = prompt('Enter the name to be removed');
    remove(remover);
  }else if(q=='display'){
    display();
  }else{
    alert('Good bye!');
    break;
  }
}
