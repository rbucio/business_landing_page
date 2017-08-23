$(document).ready(function() {
    // animate on scroll
    new WOW().init();

    // magnific-popup
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

    // owl carousel for team section
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            768 : {
                items: 3
            }
        }
    });

    // owl carousel for testimonials
    $('#customers-testimonials').owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

    // smooth scrolling
    $('a.smooth-scroll').click( function(e){
        e.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 65
        }, 1200);
    });

    // hide/show back to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() < 250) {
            //hide button
            $('#back-to-top').fadeOut();
        } else {
            $('#back-to-top').fadeIn();
        }
    })

    // toggle mobile nav on item click
    $('.navbar-collapse ul li a').on('click touch', function(){
        $('.navbar-toggle').click();
    })

});
