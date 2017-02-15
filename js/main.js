$(document).ready(function() {
  // When the user presses the .signin button, fade in the modal window
  $('.signin').on('click', function(){
    $('.modal').fadeIn('slow');
  });
  $('.close').on('click', function() {
    $('.modal').fadeOut('slow');
  });
});
