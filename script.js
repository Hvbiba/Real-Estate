
var rankIcon=document.getElementById('rank');
var dropDown=document.getElementById('dropdowns');
rankIcon.addEventListener('click',function(){
    dropDown.style.display="flex";
});
rankIcon.addEventListener('dblclick', function(){
    dropDown.style.display = "none";
});

let stepOne = document.getElementsByClassName('stepOne')[0];
let stepTwo = document.getElementsByClassName('stepTwo')[0];
let stepThree = document.getElementsByClassName('stepThree')[0];
let step1 = document.getElementById('one');
let step2 = document.getElementById('two');
let step3 = document.getElementById('three');

stepOne.addEventListener("mousemove", function(){
    step1.innerHTML='01';
});
stepTwo.addEventListener("mousemove", function(){
    step2.innerHTML='02';
});
stepThree.addEventListener("mousemove", function(){
    step3.innerHTML='03';
});
