$(document).ready(function () {
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
});