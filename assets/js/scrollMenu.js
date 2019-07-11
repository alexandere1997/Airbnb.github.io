$(window).scroll(function(){
  $('nav').toggleClass('bg-white header__line fixed-top', $(this).scrollTop() > 725);
});