var myHover=document.querySelector('#one');
var myClick=document.querySelector('#two');
var myDouble=document.querySelector('#three');


myHover.addEventListener('mouseover',function(){
  myHover.style.color='red';
})
myHover.addEventListener('mouseout',function(){
  myHover.style.color='black';
})

myClick.addEventListener('click',function(){
  myClick.textContent='You clicked on me';
})

myDouble.addEventListener('dblclick',function(){
  myDouble.innerHTML='<em> You Double clicked!</em>';
})
