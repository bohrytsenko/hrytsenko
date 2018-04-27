jQuery( document ).ready(function() {

    // Scroll to

    $(".icon").on("click", function(e) {
        e.preventDefault();
        var o = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(o).offset().top
        }, 1000);
    });

    // Add class menu

    $('.header_nav a').on('click', function () {
        $('body').toggleClass('overflow');
        $('.header_menu').toggleClass('header_menu__active');
        $('.nav_item').toggleClass('nav_item__active');
    });



    // Add class on scroll

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".header_menu__item").addClass("header_menu__scroll");
        } else
            $(".header_menu__item").removeClass("header_menu__scroll");
    });

    // Skills

    $(".info_more__text").fadeOut(500);
    $(".btn_more").on("click", function(e) {

        $(this).toggleClass("btn_close");

        if ($(this).text() == "Close")
            $(this).text("More")
        else
            $(this).text("Close");
        var o = $($(this).attr("href"));
        o.fadeToggle(500), o.length && (e.preventDefault(), $("html, body").animate({

        }, 800)),
            $(".info_more__text" + o).toggle(1e3)
    });
    $(".btn_close").on("click", function(e) {
        $(".info_more__text").fadeOut(500);

    });


    // Scroll magic

    var controller = new ScrollMagic.Controller();

    // Header name
    var t0 = new TimelineLite();
    t0.staggerFromTo('.header_name span', 4, { opacity: 0}, { opacity: 1}, 0.2);
    var t1 = new TimelineLite();
    t1.staggerFromTo('.header_name span:first-child', 2, { rotation: 180}, { rotation: 0}, 0.2);
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


