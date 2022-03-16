$(document).ready(function () {
    //Click menu
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.menu').addClass('active');
        $('.cover').addClass('active');
    });

    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $('.cover').removeClass('active');
    });
    //slider
    $('.strength').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // adaptiveHeight: true
      });
});
