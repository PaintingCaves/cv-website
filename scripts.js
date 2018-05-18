$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items:5,
        autoplay: true,
        autoplayTimeout:2500,
        dots: false,
    });
});

$(document).ready(function () {
    //Sticky heady scroll fix
    // window.addEventListener("hashchange", function () { scrollBy(0, -95) })

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            // The headerHeight value is to compensate for the navbar
            let headerHeight = $(window).height()*0.13;
            let scrollFix = $(hash).offset().top - headerHeight;
            $('html, body').animate({
                
                scrollTop: scrollFix
                
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });
});
