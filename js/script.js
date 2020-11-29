var scrollWindow = function () {
    $(window).scroll(function () {
        var $w = $(this),
            st = $w.scrollTop(),
            navbar = $('.ftco_navbar'),
            sd = $('.js-scroll-wrap');

        if (st > 50) {
            if (!navbar.hasClass('scrolled')) {
                navbar.addClass('scrolled');
                // Show back to top button
                $("#back-to-top").fadeIn();
            }
        }
        if (st < 50) {
            if (navbar.hasClass('scrolled')) {
                navbar.removeClass('scrolled sleep');
                // Hide back to top button
                $("#back-to-top").fadeOut();
            }
        }
        if (st > 100) {
            if (!navbar.hasClass('awake')) {
                navbar.addClass('awake');
                $("#back-to-top").fadeIn();
            }

            if (sd.length > 0) {
                sd.addClass('sleep');
            }
        }
        if (st < 100) {
            if (navbar.hasClass('awake')) {
                navbar.removeClass('awake');
                navbar.addClass('sleep');
                // Hide back to top button
                $("#back-to-top").fadeOut();
            }
            if (sd.length > 0) {
                sd.removeClass('sleep');
            }
        }
    });
};
scrollWindow();