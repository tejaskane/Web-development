var myone=document.querySelector('#one');
myone.addEventListener('click',function(){
  myone.textContent='X';
})
myone.addEventListener('dblclick',function(){
  myone.textContent='O';
})

var mytwo=document.querySelector('#two');
mytwo.addEventListener('click',function(){
  mytwo.textContent='X';
})
mytwo.addEventListener('dblclick',function(){
  mytwo.textContent='O';
})

var mythree=document.querySelector('#three');
mythree.addEventListener('click',function(){
  mythree.textContent='X';
})
mythree.addEventListener('dblclick',function(){
  mythree.textContent='O';
})

var myfour=document.querySelector('#four');
myfour.addEventListener('click',function(){
  myfour.textContent='X';
})
myfour.addEventListener('dblclick',function(){
  myfour.textContent='O';
})

var myfive=document.querySelector('#five');
myfive.addEventListener('click',function(){
  myfive.textContent='X';
})
myfive.addEventListener('dblclick',function(){
  myfive.textContent='O';
})

var mysix=document.querySelector('#six');
mysix.addEventListener('click',function(){
  mysix.textContent='X';
})
mysix.addEventListener('dblclick',function(){
  mysix.textContent='O';
})

var myseven=document.querySelector('#seven');
myseven.addEventListener('click',function(){
  myseven.textContent='X';
})
myseven.addEventListener('dblclick',function(){
  myseven.textContent='O';
})

var myeight=document.querySelector('#eight');
myeight.addEventListener('click',function(){
  myeight.textContent='X';
})
myeight.addEventListener('dblclick',function(){
  myeight.textContent='O';
})

var mynine=document.querySelector('#nine');
mynine.addEventListener('click',function(){
  mynine.textContent='X';
})
mynine.addEventListener('dblclick',function(){
  mynine.textContent='O';
})
var mybutton = document.querySelector('button');

var squares=document.querySelectorAll('td');

function clearSquare(){
  for(a of squares){
    a.textContent='';
  }
}

mybutton.addEventListener('click',clearSquare);
