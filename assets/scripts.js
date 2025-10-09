
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Navbar scroll effect
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#mainNav').addClass('scrolled');
  } else {
    $('#mainNav').removeClass('scrolled');
  }
});

// Smooth scrolling for nav links
$('.js-scroll-trigger').click(function (e) {
  e.preventDefault();
  var target = $(this.getAttribute('href'));
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top - 70
    }, 200);
  }
});

// Close mobile menu when clicking a link
$('.navbar-nav .nav-link').click(function () {
  $('.navbar-collapse').collapse('hide');
});

// Logo click animation
$('.navbar-brand').click(function (e) {
  e.preventDefault();
  $(this).find('img').css('transform', 'scale(1.1) rotate(5deg)');
  setTimeout(() => {
    $(this).find('img').css('transform', 'scale(1) rotate(0deg)');
  }, 300);

  // Scroll to top
  $('html, body').animate({
    scrollTop: 0
  }, 200);
});

// Tech tag hover effects
$('.tech-tag').hover(
  function () {
    $(this).css('transform', 'scale(1.05) rotate(2deg)');
  },
  function () {
    $(this).css('transform', 'scale(1) rotate(0deg)');
  }
);

// Service card hover effects
$('.service-card, .team-member').hover(
  function () {
    $(this).find('.service-icon, .member-img').css('transform', 'scale(1.1)');
  },
  function () {
    $(this).find('.service-icon, .member-img').css('transform', 'scale(1)');
  }
);

// Contact button special effect
$('.btn-primary').hover(
  function () {
    $(this).css('box-shadow', '0 8px 25px rgba(215, 235, 0, 0.3)');
  },
  function () {
    $(this).css('box-shadow', 'none');
  }
);
