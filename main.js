"use strict"
var menu = document.querySelector(".menu");
var link = document.querySelector(".link");
console.log(menu);
menu.addEventListener("click",()=>{
    link.classList.toggle("hidden");
})

navigator.geolocation.getCurrentPosition(function(event){

    
})
