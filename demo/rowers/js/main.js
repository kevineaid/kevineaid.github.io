$(document).ready(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 

    $("#textslide > div:gt(0)").hide();

    setInterval(function() { 
      $('#textslide > div:first')
        .removeClass('active')
        .next()
        .fadeIn(1000)
        .addClass('active')
        .end()
        .appendTo('#textslide');
    },  5000);

    //monitor
    $("#mon_01").ezPlus({
    scrollZoom: true
});
    $("#mon_02").ezPlus({
    scrollZoom: true
});
    $("#mon_03").ezPlus({
    scrollZoom: true
});

    //gavi 
    $("#gavi_01").ezPlus({
    scrollZoom: true
});
    $("#gavi_02").ezPlus({
    scrollZoom: true
});
    $("#gavi_03").ezPlus({
    scrollZoom: true
});

    //car
    $("#car_01").ezPlus({
    scrollZoom: true
});
    $("#car_02").ezPlus({
    scrollZoom: true
});
    $("#car_03").ezPlus({
    scrollZoom: true
});

    //kinnaur
    $("#kin_01").ezPlus({
    scrollZoom: true
});
    $("#kin_02").ezPlus({
    scrollZoom: true
});
    $("#kin_03").ezPlus({
    scrollZoom: true
});

    //mask
    $("#mask_01").ezPlus({
    scrollZoom: true
});
    $("#mask_02").ezPlus({
    scrollZoom: true
});
    $("#mask_03").ezPlus({
    scrollZoom: true
});



    $(".nav-container").css("min-height", "initial");





    $('.hide-toggle').hide();

    $('.main-cat .air-filter').click(function(){
        $('.hide-toggle').fadeIn(300);
    });
    $('.main-cat .all-filter').click(function(){
        $('.hide-toggle').fadeOut(300);
    });

    $('#trigger-popup').click(function() {
        $('#pop-up').toggleClass('active');
        $('.trigger-pop').toggleClass('active');
    });

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (window.location.hash && isChrome) {
            setTimeout(function () {
                var hash = window.location.hash;
                window.location.hash = "";
                window.location.hash = hash;
            }, 300);
        }
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 10) {
        $('.main-container').css('padding-top', '65px');
    }
    else {
        $('.main-container').css('padding-top', '0px');
    }
});
