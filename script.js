$(document).ready(function(){
  for (i = 1; i < 17; i++) {
    $('#container').append('<div class="row"></div>');

  }
  for (i = 1; i< 17; i++) {
    $('.row').append('<div class="cell"></div>');
  }
  $('.cell').hover(function() {
    $(this).addClass('hovered');
  });
  $('.cell').mouseleave(function() {
    $(this).removeClass('hovered');
  });

});
