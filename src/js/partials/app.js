$( document ).ready(function() {

    // Portfolio

    $('.portfolio_wrap a[href^="#"]').on('click', function(event) {
        $('body').addClass('body_bg');
        var target = $( $(this).attr('href') );
        target.fadeToggle(100);
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }

    });

    $( ".portfolio_close" ).click(function() {
        $( ".portfolio_full" ).slideUp(500);
        $('body').removeClass('body_bg');
    });

    // Scroll magic

    var controller = new ScrollMagic.Controller();

    // Header name

    var t1 = new TimelineLite();
    t1.staggerFromTo('.header_name span', 4, { opacity: 0}, { opacity: 1}, 0.2);
    var t2 = new TimelineLite();
    t2.staggerFromTo('.header__title .title', 8, { opacity: 0}, { opacity: 1}, 0.2);

    // Preloader
    (function() {

        'use strict';

        var overlay = document.querySelector('.overlay'),
            loader = document.querySelector('.overlay-loader'),
            overlayTL = new TimelineMax(),
            loaderTL = new TimelineMax();

        var animateOut_2 = function() {
            overlayTL.to( overlay, .6, { top: '100%', ease: Power4.easeInOut, delay: .25 } );
            loaderTL.to( loader, .5, { y: '40', opacity: 0 } );
        };

        var animateIn = function() {
            overlayTL.fromTo( overlay, .6, { top: '100%', bottom: 0 }, { top: 0, ease: Power4.easeInOut } );
            loaderTL.fromTo( loader, .5, { y: '40', opacity: 0, delay: .30 }, { y: 0, opacity: 1, delay: .6, ease: Power2.easeOut } );
        };

        animateOut_2();

        btn.onclick = function() {
            animateIn();
            setTimeout(animateOut_2, 2000);
        };

    })();
});


