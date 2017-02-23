  
$(document).ready(function() {

  $(this).scrollTop();
  location.hash = "";
  let abt = $('#about').children();
  console.log(abt);
  TweenLite.from('#about', 0.6, {width:'100%', left:0, delay:0.3, ease:Power2.easeOut});
  TweenLite.from(abt, 0.4, {opacity:0, delay:1.5, ease:Power2.easeOut});

  // hide/show navbar 
  $('.navbar-bottom a').click(function(e) {
    var target = e.target.innerHTML;
    if (target === 'Work' || target === 'Contact') {
      $('.navbar').removeClass('hidden');
    } else {
      $('.navbar').addClass('hidden');
    }
  })

  $('.navbar a').click(function(e) {
    var target = e.target.innerHTML;
    if (target === 'Work' || target === 'Contact') {
      $('.navbar').removeClass('hidden');
    } else if (target === 'Harry Bellenie') {
      $('.navbar').addClass('hidden');
    }
  })

  // project menu nav logic 
  var cryptocracyDesc = ("<div id='project-desc'><h2>Cryptocracy</h2> <svg height='3px' width='100%'> <line x1='0' y1='0' x2='15%' y2='0' style='stroke:rgb(248,243,238);stroke-width:3px' /> Sorry, your browser does not support inline SVG. </svg> <p>A highly performant, cryptocurrency exchange built with a service-oriented architecture.</p> <a target='_blank' href='http://www.cryptocracy.co'>Link</a> </div>");

  var colorzDesc = ("<div id='project-desc'><h2>Colorz.io</h2> <svg height='3px' width='100%'> <line x1='0' y1='0' x2='15%' y2='0' style='stroke:rgb(248,243,238);stroke-width:3px' /> Sorry, your browser does not support inline SVG. </svg> <p>Updated a color palette generator for developers with a new look and editor tools.</p> <a target='_blank' href='http://colorz-io.herokuapp.com'>Link</a> </div>");

  var deckstompDesc = ("<div id='project-desc'><h2>Deck Stomp</h2> <svg height='3px' width='100%'> <line x1='0' y1='0' x2='15%' y2='0' style='stroke:rgb(248,243,238);stroke-width:3px' /> Sorry, your browser does not support inline SVG. </svg> <p>A multiplayer stats-based card game with a simple, intuitive interface.</p> <a target='_blank' href='http://deckstomp.herokuapp.com/'>Link</a> </div>");

  var imaginemDesc = ("<div id='project-desc'><h2>Imaginem Productions</h2> <svg height='3px' width='100%'> <line x1='0' y1='0' x2='15%' y2='0' style='stroke:rgb(248,243,238);stroke-width:3px' /> Sorry, your browser does not support inline SVG. </svg> <p>Designed and built a new website & branding for a wedding & commercial film production company. </p> <a target='_blank' href='http://www.imaginemproductions.com'>Link</a> </div>");

  $('.project-menu-item').on('mouseenter', function() {
    var elem = $(this);
    var bg = $('#project-bg');
    bg.removeClass();
    if (elem[0].id === 'cryptocracy') {
      bg.addClass('green');
      $('#project-desc').replaceWith(cryptocracyDesc);
      $('#project-desc > a').on('mouseenter', function() {$(this).css('color', '#21CE99'); });
      $('#project-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
    } else if (elem[0].id === 'colorzio') {
      bg.addClass('orange');
      $('#project-desc').replaceWith(colorzDesc);
      $('#project-desc > a').on('mouseenter', function() {$(this).css('color', '#DA4E28'); });
      $('#project-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
    } else if (elem[0].id === 'deckstomp') {
      bg.addClass('yellow');
      $('#project-desc').replaceWith(deckstompDesc);
      $('#project-desc > a').on('mouseenter', function() {$(this).css('color', '#E0DF6B'); });
      $('#project-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
    } else {
      bg.addClass('dBlue');
      $('#project-desc').replaceWith(imaginemDesc);
      $('#project-desc > a').on('mouseenter', function() {$(this).css('color', '#093E4F'); });
      $('#project-desc > a').on('mouseleave', function() {$(this).css('color', '#F8F3EE'); });
    }
    $('.project-menu-item').removeClass('-active');
    $('.project-menu-item-dot').removeClass('-active-dot');
    elem.addClass('-active');
    elem.children('.project-menu-item-dot').addClass('-active-dot');
  })
});
