$(function() {

  var $win = $(window);
  var $pagenav = $(".page-nav");
  var pagenavTop = $(".page-nav").length && $(".page-nav").offset().top + 200;
  var pagenavFixed = 0 ;

  var scrollPageNav = function() {
      var _, scrollTop = $win.scrollTop();
      if (scrollTop >= pagenavTop && !pagenavFixed) {
        pagenavFixed = 1;
        $pagenav.addClass("navbar-fixed-top");
      }
      else if (scrollTop <= pagenavTop && pagenavFixed) {
        pagenavFixed = 0;
        $pagenav.removeClass("navbar-fixed-top");
      }
  }

  scrollPageNav();
  $win.bind("scroll", scrollPageNav);
});