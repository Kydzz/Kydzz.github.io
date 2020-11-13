
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
        centerMode: true
      },
    }
  ]
});

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

$('.methods-details__list').slick({
});

// slide index

  




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
  menu.classList.toggle('bar-change');
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



// ---search 
var searchbtn = document.querySelector('.header__search');
var search = document.querySelector('.search');
var close = document.querySelector('.close');
var header = document.querySelector('#header');
searchbtn.onclick = () => {
  search.classList.add('show');
}
close.onclick = () => {
  search.classList.remove('show');
  header.classList.remove('tozero')
}

// ---sefdsa

$(document).ready(function(){  
  $('.header__search').click(function(){  
      if($('.search').hasClass('show')) {
        $('#header').addClass('tozero')
      }
      else {
        $('#header').removeClass('tozero')
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



// modal site document
document.addEventListener('DOMContentLoaded',() => {
  let blogItem = document.querySelectorAll('.blog-details__block');
  let blogModal = document.querySelector('.blog-modal');
  let blogClose = document.querySelector('.blog-modal__close')
  blogItem.forEach( e => {
    e.onclick = function() {
      blogModal.classList.add('show-blog-modal')
      // fix body has class show blog modal
      if (blogModal.classList.contains('show-blog-modal')) {
        document.body.style =
          "overflow-y:hidden; position: relative; margin-right: 15px";
      } 
    }
  });
  blogClose.onclick = function() {
    blogModal.classList.remove('show-blog-modal');
      // fix body hasn't class show blog modal
    if (!blogModal.classList.contains('show-blog-modal')) {
    document.body.style =
         "overflow-y:visible; position: static; margin-right: 0;";
    }
  }
})



  function startTrigger(e) {
      var $elem = $(this);
      $elem.data('mouseheld_timeout', setTimeout(function() {
          $elem.trigger('mouseheld');
      }, e.data));
  }

  function stopTrigger() {
      var $elem = $(this);
      clearTimeout($elem.data('mouseheld_timeout'));
  }


  var mouseheld = $.event.special.mouseheld = {
      setup: function(data) {
          // the first binding of a mouseheld event on an element will trigger this
          // lets bind our event handlers
          var $this = $(this);
          $this.bind('mousedown', +data || mouseheld.time, startTrigger);
          $this.bind('mouseleave mouseup', stopTrigger);
      },
      teardown: function() {
          var $this = $(this);
          $this.unbind('mousedown', startTrigger);
          $this.unbind('mouseleave mouseup', stopTrigger);
      },
      time: 70 // default to 750ms
  };

// usage
// $(".blog-details__block").bind('mouseheld', function(e) {
//   // blogModal.classList.remove('show-blog-modal');
//   $('.blog-modal').addClass('d-none')
// })

// $(document).ready(function() {
//   if ($('.blog-details__block').hasClass('show-blog-modal')) {
//     console.log('nhieu class the')
//   }else {
//     console.log('s')
//   }
// })


//modal site 3 
document.addEventListener('DOMContentLoaded', function(){
  let yt = document.querySelector('.youtube');
  let cleanModal= document.querySelector('.clean-system-modal');
  yt.addEventListener('click',() => {
    cleanModal.classList.add('show');
  })
  cleanModal.onclick = () => {
    cleanModal.classList.remove('show');
  }
})
