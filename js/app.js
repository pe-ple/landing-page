/* Template Name: sinata - Bootstrap 4 Landing Page Tamplate
   Author: digitaltoch
   File Description: Main JS file of the template
*/


! function($) {
    "use strict";

    var sinata = function() {};

    sinata.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    sinata.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    sinata.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset:20
        });
    },

    sinata.prototype.initTesticarousel = function() {
        $('#testi-carousel').owlCarousel({
            items: 1,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                576:{
                    items:2
                },
     
            }
        });
    },

    sinata.prototype.initCounter = function() {
        // Counter Number
        var a = 0;
        $(window).scroll(function() {
            var oTop = 0 - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },

                        {

                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });

    },


    feather.replace()

    sinata.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTesticarousel();
        this.initCounter();
    },
    //init
    $.sinata = new sinata, $.sinata.Constructor = sinata
}(window.jQuery),


//initializing
function($) {
    "use strict";
    $.sinata.init();
}(window.jQuery);

const showSignupAlert = () => {
  const email = $('#email').val();
  return fetch('https://peopleworld.herokuapp.com/api/landing/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email})
  })
    .then(async (res) => {
      const result = await res.json();
      if (result.success) {
        gtag('event', 'sign_up');
        return $('#getaccess').append('<div class="position-fixed alert alert-success alert-dismissible fade show" style="top: 5.8rem; left: 50%; transform: translateX(-50%); z-index: 5;" role="alert"><strong>You\'re on the list!</strong> Our team will reach out to you shortly<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
      } else if (result.error != null) {
        return $('#getaccess').append(`<div class="position-fixed alert alert-danger alert-dismissible fade show" style="top: 5.8rem; left: 50%; transform: translateX(-50%); z-index: 5;" role="alert"><strong>Error!</strong> ${result.error}. Please try again<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`) 
      }
    })
    .catch(() => {
      return $('#getaccess').append('<div class="position-fixed alert alert-danger alert-dismissible fade show" style="top: 5.8rem; left: 50%; transform: translateX(-50%); z-index: 5;" role="alert"><strong>Error!</strong> We were not able to sign you up. Please try again later<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
    })
}