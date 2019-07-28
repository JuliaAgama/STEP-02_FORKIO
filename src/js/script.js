;
/********** HEADER **********/


$('.top-menu-button').on('click', function() {
    $('.top-menu').toggleClass('top-menu--hidden');
}); 

// При клике на пункт меню - плавно прокручивать страницу вниз до выбранного места.

$.fn.slowScrollTo = function(speed) {
    $('html, body').animate({
        scrollTop: $($(this[0].hash)).offset().top
    }, 1000);
};

$('.top-menu__item').on('click', function(event) {$(this).slowScrollTo(1000)});

;
/********** OVERVIEW SECTION **********/


;
/********** PRICING SECTION **********/


;
/********** TESTIMONIALS SECTION **********/

