$(function() {
    $('#close').click(function () {
        $('body').trigger('click');
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1199:{
                items:3
            }
        }
    });
    $('.anchor[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});