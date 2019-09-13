"use strict";
var menu=document.querySelector(".menu"),
link=document.querySelector(".link"),
triggle=document.querySelector(".triggle"),
modal=document.querySelector(".modal"),
modalclose=document.querySelector(".modal-close");
function geoMyLocation(){
    var e=document.querySelector(".map-link"),
    t=document.querySelector(".status");
    modal.classList.add("show-modal"),
    modalclose.addEventListener("click",()=>{modal.classList.remove("show-modal")},!1),
    window.addEventListener("click",e=>{e.target===modal&&modal.classList.remove("show-modal")},!1),
    e.href="",
    e.textContent="",
    navigator.geolocation?(t.textContent="Locating…",
    navigator.geolocation.getCurrentPosition(function(o){const n=o.coords.latitude,l=o.coords.longitude;t.textContent="",
    e.href=`https://www.google.com/maps/@${n},${l},15z`,
    e.textContent=`Latitude: ${n} °, Longitude: ${l} °`
},
    function(){t.textContent="Unable to retrieve your location"})):t.textContent="Geolocation is not supported by your browser"}
    triggle.addEventListener("click",geoMyLocation);