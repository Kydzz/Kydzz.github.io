$(document).ready(function () {
  var windowSize = $(window).width();
  $('.carousel').slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    arrows: false,
    autoplay: true,
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
          arrows: false,
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
    autoplay: true
  });
});


$('.projects__list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
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
        arrows: false,
        slidesToScroll: 1,
      },
    },
  ],
});

// footer 
$('.footer__top--list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    }
  ]
});
//hover img 

$(() => {
  $('.section__top--thumnail img').mouseover(function(){
    let imgPath = $(this).attr('src')
    $('.section__top--img img').attr('src',imgPath)
  }) 
})

// back to top

var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// tab panel
  


$(document).ready(function() {
    
  //alert('here');

$('.tabs a').click(function(){

   $('.panel').hide();
   $('.tabs a.active').removeClass('active');
   $(this).addClass('active');
   
   var panel = $(this).attr('href');
   $(panel).fadeIn(1000);
   
   return false;  // prevents link action
  
});  // end click 

   $('.tabs li:first a').click();
   
}); // end ready




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
// var navLink = document.querySelectorAll(".nav__link")
// var dropmenu = document.querySelectorAll(".dropdown-menu")

// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].onclick = function() {
//     dropmenu[i-1].classList.toggle("open");
//     for (let j = 0; j < dropmenu.length; j++) {
//       dropmenu[j].classList.remove("open");
//     }
//     dropmenu[i-1].classList.toogle("open");
//   }
// }
// for (let i = 0; i < navLink.length; i++) {
//   navLink[i].onclick = () => {

//     dropmenu[i - 1].classList.toggle("open")
//   }
// }
(function($) { 
  $(function() { 
    
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.dropdown-menu').toggle();
    
      $('.dropdown-menu').not($(this).siblings()).hide();
      e.stopPropagation();
    });
   
    $('html').click(function() {
      $('.dropdown-menu').hide();
    });
  }); 
})(jQuery); 




//modal 
var imgVideo = document.querySelectorAll(".section__right--thumnail")
var modal = document.querySelector(".modal")
var modalMain = document.querySelector(".modal__main")
imgVideo.forEach( (e,idx) => {
    e.onclick = () => {
      modal.style.opacity = "1"
      modal.style.visibility = "visible"
      modalMain.classList.add("translate")
    }
});
modal.onclick = () => {
  modal.style.opacity = "0"
  modal.style.visibility = "hidden"
}