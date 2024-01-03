var add= document.querySelector("#add");
// var remove= document.querySelector("#remove");
var stranger=document.querySelector("h3");
var a=0;
var random=0;
add.addEventListener("click",function(){
if(random==0){
    stranger.innerHTML="Friends";
stranger.style.color="green";
add.innerHTML="Remove"
random=1;
}
else
{stranger.innerHTML="Strangers";
stranger.style.color="red";
add.innerHTML="Add Friend"

random=0;}

})
// remove.addEventListener("click",function(){
//     stranger.innerHTML="Strangers";
//     stranger.style.color="red";
// })
var image=document.querySelector("img");
image.addEventListener("click",function(){
    if(a==0){
        image.style.transform="scale(1.5,1.5)"
        a=1;
    }
    else{
        image.style.transform="scale(1,1)"
        a=0;
    }
    
})