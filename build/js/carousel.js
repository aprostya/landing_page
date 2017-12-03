$(document).ready(function() {

$(".cards-container").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500,
    afterMove: moved
});
$('.pers-container-icons__wrapper').on('click', 'div', function() {
    // var $this = $(this);
    console.log("move fired");
    var slideNum = $(this).data('slide');
    console.log("slidenum:" + slideNum);
    // $(".cards-container").trigger('owl.goTo'.slideNum);
    $(".cards-container").trigger('owl.goTo', slideNum);
});

function  moved() {
    var owl = $(".cards-container").data('owlCarousel');
    var $buttons = $('.pers-icon');
    $buttons.removeClass('active').removeAttr('disabled');
    $('.pers-container-icons__wrapper').find('[data-slide="'+owl.currentItem +'"]').addClass('active').attr('disabled', 'disabled');
}

});

$(document).ready(function() {

    $("#pers-carousel").owlCarousel({
        nav: true,
        navText : ["<nav class='next-slide-btn next-slide-btn--next owl-prev'></nav>", "<nav class='next-slide-btn next-slide-btn--preview owl-next'></nav>"],
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        loop: true
    });
});