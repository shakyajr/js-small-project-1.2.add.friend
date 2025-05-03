var btn = document.querySelector(".card button");
var stat = document.querySelector(".card h5");

var flag = 0


btn.addEventListener("click",function(){
   if(flag===0){
       stat.innerHTML = "Request Sending..."
       stat.style.color = "yellow"
       btn.innerHTML = "Cancel Request"
       flag = 1

       setTimeout(function(){  
           stat.innerHTML = "Friends"
           stat.style.color = "green"
           btn.innerHTML = "Remove Friend"
           
       },3000)
   }else{
       stat.innerHTML = "Strangers"
       stat.style.color = "red"
       btn.innerHTML = "Add Friend"
       flag = 0
    }



});

