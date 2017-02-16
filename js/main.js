$(document).ready(function() {
  // $('.modal').on('click', function() {
  //   $('.modal').clone('.modal');
  $('.signin').on('click', function(){
    $('.modal').fadeIn('slow');
  });
  $('.close').on('click', function() {
    $('.modal').fadeOut('slow');
  });
  $('.submit').on('click', function(){
    $('input').addClass('.error');
    $('input').attr('placeholder', 'please enter information');
  });
  $('input').hover(function(){
    $('input').removeAttr('class');
    $('input').removeAttr('placeholder');
  });
});
