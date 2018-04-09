$(document).ready(function() {

    $('.js--scroll-to-contact').click(function() {
        setTimeout(function() {
            $(".js--section-contact").effect("shake");
        }, 600);
    });

    // scroll to about
    $('.js--scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top - 100}, 1000);
    });
    
    // scroll to portfolio
    $('.js--scroll-to-portfolio').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top - 50}, 1000);
    });

    // scroll to contact
    $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    });

    // navigation scroll 
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
    });
});

