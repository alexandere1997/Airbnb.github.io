$(window).scroll(function(){
  $('nav').toggleClass('bg-white header__line fixed-top', $(this).scrollTop() > 1);
});

$(window).scroll(function(){
  $('.navbar-toggler').attr({"data-toggle":"collapse"} , $(this).scrollTop() > 1);
});