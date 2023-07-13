$(document).ready(function () {

    // For testimonials slider
    $('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
    });

    // For Mobile Dropdown
    $('.menu-toggle').click(function () {
        $('.menu-toggle i').toggleClass('fa-xmark fa-bars');
        $(".nav-right").toggleClass('active');

    })

    $('.dropdown-nav-item > a').click(function () {
        $(".dropdown-nav-item").toggleClass('active');
        $('.main-menu li a i').toggleClass('fa-angle-up fa-angle-down');
    })

    // For Header position sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });

    //for scrolltop button
    var btn = $('#scrolltop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // For wow animation 
    new WOW().init();

});