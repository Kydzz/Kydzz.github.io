"use strict"
var menu = document.querySelector(".menu");
var link = document.querySelector(".link");
var triggle = document.querySelector(".triggle");
var modal = document.querySelector(".modal");
var modalclose = document.querySelector(".modal-close");

menu.addEventListener("click",()=>{
    link.classList.toggle("hidden");
})

// MAP
function geoMyLocation(){
    var mapLink = document.querySelector(".map-link");
    var status = document.querySelector(".status");
    modal.classList.add("show-modal");
    modalclose.addEventListener("click",()=>{
        modal.classList.remove("show-modal");
    },false);
   window.addEventListener("click",(e)=>{
       if (e.target === modal) 
            modal.classList.remove("show-modal");
   },false)
   mapLink.href = '';
   mapLink.textContent = '';
 
   function success(position) {
     const latitude  = position.coords.latitude;
     const longitude = position.coords.longitude;
 
     status.textContent = '';
     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
   }
 
   function error() {
     status.textContent = 'Unable to retrieve your location';
   }
 
   if (!navigator.geolocation) {
     status.textContent = 'Geolocation is not supported by your browser';
   } else {
     status.textContent = 'Locating…';
     navigator.geolocation.getCurrentPosition(success, error);
   }
}


triggle.addEventListener("click",geoMyLocation);
