//  <.....hamburger nav menu.......>

$('div.hamburger').on('click', function(){
  $('.sidebar').toggleClass('active');
  $('div.hamburger').fadeOut("slow", 0.15);
});

$('.close').on('click', function(){
   $('.sidebar').removeClass('active');
});

// main img is going to transition from 500px to a smaller size of 200px,
// when user scrolls down
$(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();
  // if the distanceScrolled is  greater than num, > make the image smaller
  if(distanceScrolled > 200){
    $('img').addClass('smaller-finch');
  } else {
    $('img').removeClass('smaller-finch');
  }
});
