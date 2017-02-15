$(document).ready(function() {
  $('.signin').on('click', function(){
    $('.modal').fadeIn('slow');
  });
  $('.close').on('click', function() {
    $('.modal').fadeOut('slow');
  });
  $('.submit').on('click', function(){
    $('input').addClass('.error');
  });
});
