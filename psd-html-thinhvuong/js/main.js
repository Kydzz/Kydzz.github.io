
// var backButton = '<a href="#" class="prev"><img src="./images/prev.png" alt=""></a>';
// var nextButton = '<a href="#" class="next"><img src="./images/next.png" alt=""></a>';
$(document).ready(function(){
  $('.service__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
            centerMode: true
        },
        }
    ]
    });
});

$(document).ready(function(){
  $('.blog-details__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
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
});

$(document).ready(function(){
  $('.methods-details__list').slick({});
});

// scroll
$(document).ready(function () {
  'use strict';
   var c, currentScrollTop = 0,
       navbar = $('header');
   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("slideUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("slideUp");
      }
      c = currentScrollTop;
  });
});
// slide index 
  $('.header__link').click(function(e){
    // e.preventDefault();
    $('.header__img').removeClass('active');
    var el = $(this).parent().index();
    $(this).children($('.header__img')).addClass('active');
  });
// back to top
$(document).ready(function(){
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
});
// 



// navbar
var overlay = document.querySelector('.overlay');
var headerList = document.querySelector('.header__list');
var menu = document.querySelector('.menu');
menu.onclick = function() {
  overlay.classList.toggle('show');
  headerList.classList.toggle('show');
  menu.classList.toggle('bar-change');
};

// ----overlay

var contain = $('.overlay').hasClass('show');
$(document).ready(function(){  
  $('.menu').click(function(){  
      if($('.overlay').hasClass('show')) {
        $('#header').addClass('tozero');
      }
      else {
        $('#header').removeClass('tozero');
      }
  });   
}); 



// ---search loi ie
var searchbtn = document.querySelector('.header__search');
var search = document.querySelector('.search');
var close = document.querySelector('.close');
var header = document.querySelector('#header');
searchbtn.onclick = function(){
  search.classList.add('show');
}
close.onclick = function(){
  search.classList.remove('show');
  header.classList.remove('tozero');
}

// ---*-------

$(document).ready(function(){  
  $('.header__search').click(function(){  
      if($('.search').hasClass('show')) {
        $('#header').addClass('tozero');
      }
      else {
        $('#header').removeClass('tozero');
      }
  });   
}); 


// remove bg
$(window).scroll(function() {
  if ($(window).scrollTop() > 310) {
    $('#header').addClass('bg');
  } else {
    $('#header').removeClass('bg');
  }
});



// modal site document loi ie 
document.addEventListener('DOMContentLoaded',function() {
  let blogItem = document.querySelectorAll('.blog-details__block');
  let blogModal = document.querySelector('.blog-modal');
  let blogClose = document.querySelector('.blog-modal__close');

  for (let index = 0; index < blogItem.length; index++) {
    blogItem[index].onclick = function() {
      blogModal.classList.add('show-blog-modal');
      // fix body has class show blog modal
      if (blogModal.classList.contains('show-blog-modal')) {
        document.body.style =
          "overflow-y:hidden; position: relative; margin-right: 15px";
      } 
    }
    blogClose.onclick = function() {
      blogModal.classList.remove('show-blog-modal');
        // fix body hasn't class show blog modal
      if (!blogModal.classList.contains('show-blog-modal')) {
      document.body.style =
           "overflow-y:visible; position: static; margin-right: 0;";
      }
    };
  }
});

//modal site 3
document.addEventListener('DOMContentLoaded', function(){
  let ytModal = document.querySelector('.youtube');
  let cleanModal= document.querySelector('.clean-system-modal');
  ytModal.onclick = function() {
    cleanModal.classList.add('show');
  };
  cleanModal.onclick = function() {
    cleanModal.classList.remove('show');
  };
});


$(document).ready(function() {
  $("a[href*='#']:not([href='#])").click(function() {
      let target = $(this).attr("href");
      $('html,body').stop().animate({
      scrollTop: $(target).offset().top
      }, 1000);
      event.preventDefault();
  });
});


// site 5
$('document').ready(function()
{
    $('textarea').each(function(){
            $(this).val($(this).val().trim());
        }
    );
});