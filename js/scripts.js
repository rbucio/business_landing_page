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
});
