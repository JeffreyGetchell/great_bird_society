//  <.....hamburger nav menu.......>

$('div.hamburger').on('click', function(){
  $('.sidebar').toggleClass('active');
  $('div.hamburger').fadeOut("slow", 0.15);
});

$('.close').on('click', function(){
   $('.sidebar').removeClass('active');
});
