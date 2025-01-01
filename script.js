$(document).ready(function () {
  // Countdown Timer Logic
  var countDownDate = new Date("Feb 30, 2025 15:37:25").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days').html(days);
    $('#hours').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);

    if (distance < 0) {
      clearInterval(x);
      $('#timer').html("EXPIRED");
    }
  }, 1000);

  // Hamburger Menu Logic
  function checkScreenWidth() {
    if ($(window).width() <= 600 && $('.burger').length === 0) {
      // Add the <nav> element when screen width is 600px or less, only if it's not already added
      $('.header_items').append('<nav class="burger"><div class="ham-menu"><span></span><span></span><span></span></div></nav>');
      $('#speaker_ham').remove();
      $('#Agenda').after('<li class="main_li" id="Work"><a href="">Workshop</a></li>')
      $('.nav_links').toggleClass('ham_nav_links');
      $('.social_media').remove();
      $('#About').after('<div class="social_media" id="social_after_about"><a href="https://www.facebook.com/profile.php?id=61557439134109&mibextid=ZbWKwL"><i class="bi bi-facebook icons"></i></a><a href="https://www.instagram.com/ieee.cs.ttu?igsh=MTNtbmo1ZmFrcnFrbg=="><i class="bi bi-instagram icons"></i></a><a href="https://www.linkedin.com/company/ieee-computer-society-ttu/"><i class="bi bi-linkedin icons"></i></a></div>');
      $('.content_wrapper').css('grid-template-columns' ,'0.1fr 1fr');
      $('.content_wrapper').css('gap' ,'10px');
      $('.content_wrapper').css('justify-content' ,'left');


      $('.event_time').css('text-align', 'left');
      $('.timeline1').css('grid-column-start', '1');
      $('.timeline1').css('margin-left', '15px');
      $('.timeline1').css('height', '130px');

      $('.timeline2').css('grid-column-start', '1');
      $('.timeline2').css('margin-left', '15px');
      $('.timeline2').css('height', '80px');

      $('.timeline3').css('grid-column-start', '1');
      $('.timeline3').css('margin-left', '15px');
      $('.timeline3').css('height', '240px');

      $('.timeline4').css('grid-column-start', '1');
      $('.timeline4').css('margin-left', '15px');

      $('.timeline5').css('grid-column-start', '1');
      $('.timeline5').css('margin-left', '15px');

      $('.timeline6').css('grid-column-start', '1');
      $('.timeline6').css('margin-left', '15px');
      $('.timeline6').css('height', '420px');

      $('.timeline7').css('grid-column-start', '1');
      $('.timeline7').css('margin-left', '15px');
      $('.timeline7').css('height', '450px');

      $('.timeline8').css('grid-column-start', '1');
      $('.timeline8').css('margin-left', '15px');
      $('.timeline8').css('height', '100px');

      $(".event_right").css('grid-column-start','2')

      $('.grid_left').css('grid-column-start', '2');
      $('.left').removeClass('agenda_event_left');
      $('.left').addClass('agenda_event_right');
      $('.event_left').css('justify-self','start');

      const hamMenu = $('.ham-menu');
      const ulLinks = $('.nav_links');
      hamMenu.on('click', function () {
        hamMenu.toggleClass("active");
        ulLinks.toggleClass("active");
      });
    } else if ($(window).width() > 600 && $('.burger').length > 0) {
      // Remove the hamburger menu if the screen width is greater than 600px
      $('#Agenda').after('<li class="main_li" id="speaker_ham"><a href="">Speakers</a><ul class="drop_down"><li><a href="">Keynote Speakers</a></li><li><a href="">Workshop Speakers</a></li></ul></li>');
      $('.burger').remove();
      $('#Work').remove();
      $('.nav_links').toggleClass('ham_nav_links');
      $('#social_after_about').remove();
      $('.nav_links').after('<div class="social_media" ><a href="https://www.facebook.com/profile.php?id=61557439134109&mibextid=ZbWKwL"><i class="bi bi-facebook icons"></i></a><a href="https://www.instagram.com/ieee.cs.ttu?igsh=MTNtbmo1ZmFrcnFrbg=="><i class="bi bi-instagram icons"></i></a><a href="https://www.linkedin.com/company/ieee-computer-society-ttu/"><i class="bi bi-linkedin icons"></i></a></div>');

      $('.content_wrapper').css('grid-template-columns' ,'1fr 0.1fr 1fr');
      $('.content_wrapper').css('gap' ,'0');
      $('.content_wrapper').css('justify-content' ,'center');

      $('.event_time').css('text-align', 'center');

      $('.timeline1').css('grid-column-start', '2');
      $('.timeline1').css('margin-left', '0');
      $('.timeline1').css('height', '110px');

      $('.timeline2').css('grid-column-start', '2');
      $('.timeline2').css('margin-left', '0');
      $('.timeline2').css('height', '100px');

      $('.timeline3').css('grid-column-start', '2');
      $('.timeline3').css('margin-left', '0');
      $('.timeline3').css('height', '210px');

      $('.timeline4').css('grid-column-start', '2');
      $('.timeline4').css('margin-left', '0');
      $('.timeline4').css('height', '150px');

      $('.timeline5').css('grid-column-start', '2');
      $('.timeline5').css('margin-left', '0');
      $('.timeline5').css('height', '210px');

      $('.timeline6').css('grid-column-start', '2');
      $('.timeline6').css('margin-left', '0');
      $('.timeline6').css('height', '380px');

      $('.timeline7').css('grid-column-start', '2');
      $('.timeline7').css('margin-left', '0');
      $('.timeline7').css('height', '420px');

      $('.timeline8').css('grid-column-start', '2');
      $('.timeline8').css('margin-left', '0');
      $('.timeline8').css('height', '110px');

      $(".event_right").css('grid-column-start','3')

      $('.grid_left').css('grid-column-start', '1');

      $('.left').removeClass('agenda_event_right');
      $('.left').addClass('agenda_event_left');
      $('.event_left').css('justify-self','end');

    }
  }


  checkScreenWidth();
  $(window).resize(function () {
    checkScreenWidth();
  });

  AOS.init();
});