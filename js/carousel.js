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
    var $this = $(this);
    var slideNum = $(this).data('slide');
    $(".cards-container").trigger('owl.goTo'.slideNum);
});

function  moved() {
    var owl = $(".cards-container").data('owlCarousel');
    var $buttons = $('.pers-icon');
    $buttons.removeClass('active').removeAttr('disabled');
    $('.pers-container-icons__wrapper').find('[data-slide="'+owl.currentItem +'"]').addClass('active').attr('disabled', 'disabled');
}

});