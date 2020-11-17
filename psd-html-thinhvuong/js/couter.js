// animation scroll number counter
$(document).ready(function(){
    var counted = 0;
    $(window).scroll(function() {
    
      var oTop = $('.achievement__link').offset().top - window.innerHeight;
      if ($(window).scrollTop() > oTop) {
        $('.achievement__list').removeClass('animate');
      }
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
    
            });
        });
        counted = 1;
      }
    });
  });