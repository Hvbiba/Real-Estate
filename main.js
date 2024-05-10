var rankIcon=document.getElementById('rank');
var dropDown=document.getElementById('dropdowns');
rankIcon.addEventListener("click",function(){
    dropDown.style.display="flex";
});
rankIcon.addEventListener("dblclick", function(){
    dropDown.style.display = "none";
});

