$(document).ready(function() {
    // animate on scroll
    new WOW().init();

    //magnific-popup
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

    //owl carousel
    $('#team-members').owlCarousel({
        item: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
