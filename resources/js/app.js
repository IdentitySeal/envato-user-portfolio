AOS.init({
    offset: 100,
    disable: function() {
        var maxWidth = 650;
        return window.innerWidth < maxWidth;
    }
});
// Navbar 
/* Change navbar styling on scroll */
$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active ');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
// Collapse the navbar link is clicked 

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

// progress bar 
$(document).ready(function() {
    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    )
});

// swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});