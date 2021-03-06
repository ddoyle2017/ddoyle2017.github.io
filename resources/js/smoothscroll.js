//
// Adds a smooth scroll animation to hyperlink reference clicks on the webpage, using jQuery.
// REFERENCE: https://css-tricks.com/snippets/jquery/smooth-scrolling/
//
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[href="#projects-carousel"]').click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } 
                else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
                return false;
            });
        }
    }
});
