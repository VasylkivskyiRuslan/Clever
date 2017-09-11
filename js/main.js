$(document).ready(function() {
    $('#middle__slider').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

$(window).resize(function(){
    if (window.matchMedia('screen and (max-width: 800px)').matches) {
        $('.container').removeClass('container').addClass('container-fluid');
    } else {
        $('.container-fluid').removeClass('container-fluid').addClass('container');
    }
});

$(window).on('load', function () {
    if (window.matchMedia('screen and (max-width: 800px)').matches) {
        $('.container').removeClass('container').addClass('container-fluid');
    }
});