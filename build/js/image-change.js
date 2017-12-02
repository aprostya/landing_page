jQuery(document).ready(function ($) {
    $('nav').on('click', function () {
        if ($(this).hasClass('next-slide-btn--down')) {
            var movePos = $(window).scrollTop() + $(window).height();
        }
        $('html, body').animate({
            scrollTop: movePos
        }, 700);
    });
});