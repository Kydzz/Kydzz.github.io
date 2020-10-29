
var backButton = '<a href="#" class="prev"><img src="./images/prev.png" alt=""></a>';
var nextButton = '<a href="#" class="next"><img src="./images/next.png" alt=""></a>';
$('.service__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: backButton,
  nextArrow: nextButton,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    }
  ]
});


var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
  }



var link = [...document.querySelectorAll('.header__link')];
var img = [...document.querySelectorAll('.header__img')];
link.forEach( (e,idx) => {
    e.onclick = function() {
        // console.log(this)
        for (let i = 0; i < img.length; i++) {
            img[i].className = img[i].className.replace(" active", "");
        }
        img[idx].classList.add('active')
    }
});



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

// navbar
var overlay = document.querySelector('.overlay');
var headerList = document.querySelector('.header__list');
var menu = document.querySelector('.menu');
menu.onclick = () => {
  overlay.classList.toggle('show');
  headerList.classList.toggle('show');
}

// ----overlay

var contain = $('.overlay').hasClass('show');
$(document).ready(function(){  
  $('.menu').click(function(){  
      if($('.overlay').hasClass('show')) {
        $('#header').addClass('tozero')
      }
      else {
        $('#header').removeClass('tozero')
      }
  });   
}); 