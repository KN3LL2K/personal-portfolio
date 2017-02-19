$(document).ready(function() {


  $('.project-menu-item').on('mouseenter', function() {
    var elem = $(this);
    var bg = $('#project-bg');
    bg.removeClass();
    console.log(elem[0].id)
    if (elem[0].id === 'cryptocracy') {
      bg.addClass('green');
    } else if (elem[0].id === 'colorzio') {
      bg.addClass('orange');
    } else if (elem[0].id === 'deckstomp') {
      bg.addClass('yellow');
    } else {
      bg.addClass('dBlue');
    }
    $('.project-menu-item').removeClass('-active');
    $('.project-menu-item-dot').removeClass('-active-dot');
    elem.addClass('-active');
    elem.children('.project-menu-item-dot').addClass('-active-dot');
  })
  


  


});
