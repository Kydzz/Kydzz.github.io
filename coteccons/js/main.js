$(document).ready(function(){
  var windowSize = $(window).width();
    $('.carousel').slick({
    slidesToShow: 2,
    dots:true,
    centerMode: true,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    });
    



    $('.section__right--gallery').slick({
        arrows: true,
        centerPadding: "0px",
        // dots: true,
        slidesToShow: 1,
        infinite: false,
        centerMode: true,
        autoplay:true
      });
  });


  // js 
let bar = document.querySelector(".nav__toggle")
let navList = document.querySelector(".nav__list")
bar.onclick = () => {
  navList.classList.toggle("block");
}

// preload
// let preload = document.querySelector(".preload")
// window.addEventListener("load",() => {
//   setTimeout(function() {
//     console.log("da")
//     preload.style.opacity = 0;
//     preload.style.visibility = "hidden";
//   },1000)
// })

// dropdown 
var navLink = document.querySelectorAll(".nav__link")
var dropmenu = document.querySelectorAll(".dropdown-menu")
console.log(dropmenu)

for (let i = 0; i < navLink.length; i++) {
  navLink[i].onclick = () => {
    console.log(navLink[i])
    dropmenu[i - 1].classList.toggle("open")
  }
}
