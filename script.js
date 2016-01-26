$(document).ready(function(){
  for (i = 1; i < 17; i++) {
    $('#container').append('<ul></ul>');

  }
  for (i = 1; i< 17; i++) {
    $('ul').append('<li></li>');
  }
  $('button').click(newGrid);
  $('li').hover(function() {
    $(this).addClass('hovered');
  });
  $('li').mouseleave(function() {
    $(this).removeClass('hovered');
  });
  $('li').on("click", function() {
    $(this).addClass("clicked");
  });


});

function newGrid() {
    var newGridSide = prompt("How big a grid would you like? (x by x)")
    $('li').remove();
    $('ul').remove();
    for (i = 0; i < (newGridSide); i++) {
      $('#container').append('<ul></ul>');

    }
    for (i = 0; i< (newGridSide); i++) {
      $('ul').append('<li></li>');
    }
    $('li').hover(function() {
      $(this).addClass('hovered');
    });
    $('li').mouseleave(function() {
      $(this).removeClass('hovered');
    });
    $('li').on("click", function() {
      $(this).addClass("clicked");
    });
};
