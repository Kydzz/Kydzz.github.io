"use strict"
var menu = document.querySelector(".menu");
var link = document.querySelector(".link");
var triggle = document.querySelector(".triggle");
var modal = document.querySelector(".modal");
var modalclose = document.querySelector(".modal-close");
menu.addEventListener("click",()=>{
    link.classList.toggle("hidden");
})

navigator.geolocation.getCurrentPosition(function(event){
})
function geoMyLocation(){
    modal.classList.add("show-modal");
    modalclose.addEventListener("click",()=>{
        modal.classList.remove("show-modal");
    },false);
   window.addEventListener("click",(e)=>{
       if (e.target === modal) 
            modal.classList.remove("show-modal");
   },false)

    function success(){

    }
    function error(){
    
    }
}


triggle.addEventListener("click",geoMyLocation);


