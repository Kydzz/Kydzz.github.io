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