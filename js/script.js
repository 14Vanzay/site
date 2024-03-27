$(document).ready(function() {
    $('.loader').fadeOut(1000);
});

$('a[href="#"]').on('click', function(e) {
    e.preventDefault();
});






$('.page-modal-close').click(function() {
    $(this).closest('.page-modal').removeClass('show');
    $(this).closest('.page-modal').addClass('hide');
});


$('.modal-btn').click(function() {
    var modalId = $(this).attr('data-modal');
    $(modalId).removeClass('hide');
    $(modalId).addClass('show');
});


$('.my-pixel-switch-btn-item').click(function() {
    $('.my-pixel-switch-btn-item').removeClass('active');
    $(this).addClass('active');
    var switchId = $(this).index();
    $('.my-pixel-switch-content-item').hide(0);
    $('.my-pixel-switch-content-item').eq(switchId).fadeIn(200);
});

$('.my-pixel-tab-btn-item').click(function() {
    $(this).closest('.my-pixel-tab').find('.my-pixel-tab-btn-item').removeClass('active');
    $(this).addClass('active');
    var tabId = $(this).index();
    $(this).closest('.my-pixel-tab').find('.my-pixel-tab-content-item').hide(0);
    $(this).closest('.my-pixel-tab').find('.my-pixel-tab-content-item').eq(tabId).fadeIn(200);
});


$('.my-pixel-modal-form-sub').click(function(){
    $(this).closest('.page-modal').find('.page-modal-close').click();
});

$(function() {
    var $textarea = $('.my-pixel-modal-form-item-input textarea');
    var $counter = $('.my-pixel-modal-form-item-input-land span');

    // Обновляем количество символов при каждом изменении
    $textarea.on('input', function() {
        var length = $(this).val().length;
        $counter.text(length);
    });

    // Устанавливаем начальное количество символов
    $counter.text($textarea.val().length);
});

$('.rating-slider-item-line-item').each(function() {
    $(this).css('width', $(this).attr('data-width'));
});

$('.rating-slider').slick({
    fade: true,
    prevArrow: $('.rating-slider-left-arrow'),
    nextArrow: $('.rating-slider-right-arrow'),
});
$('.rating-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-slide').eq(nextSlide).css('opacity', '0').animate({ 'opacity': '1' }, 1000);

});

$('.rating-city-slider').slick({
    centerMode: true,
    centerPadding: '97px',
    infinite: true,
    prevArrow: $('.rating-city-slider-arrow-left'),
    nextArrow: $('.rating-city-slider-arrow-right'),

});

$('.main-menu-item').on('touchstart', function() {
    $(this).addClass('active');
});

$('.main-menu-item').on('touchend', function() {
  $(this).removeClass('active');
});



// $('.page-modal-close').on('touchstart', function() {
//     e.preventDefault();
//     e.stopPropagation();
// });

// $('.page-modal').on('touchstart', function(e) {
//     startY = e.originalEvent.touches[0].clientY;
//     startTop = $(this).position().top;
//     $(this).css('transition', 'none');
// });

// $('.page-modal').on('touchmove', function(e) {
//     var currentY = e.originalEvent.touches[0].clientY;
//     var deltaY = currentY - startY;
//     $(this).css('top', startTop + deltaY);
// });

// $('.page-modal').on('touchend', function() {
//   $(this).addClass('hide');
//   $(this).css('top', startTop + 'px'); 
//   $(this).css('transition', 'all 0.5s ease-in-out');
// });




$('.page-modal-close').on('touchstart', function(e) {
    startY = e.originalEvent.touches[0].clientY;
    startTop = $(this).closest('.page-modal').position().top;
    $(this).closest('.page-modal').css('transition', 'none');
});

$('.page-modal-close').on('touchmove', function(e) {
    var currentY = e.originalEvent.touches[0].clientY;
    var deltaY = currentY - startY;
    $(this).closest('.page-modal').css('top', startTop + deltaY);
});

$('.page-modal-close').on('touchend', function() {
  $(this).closest('.page-modal').addClass('hide');
  $(this).closest('.page-modal').css('top', startTop + 'px'); 
  $(this).closest('.page-modal').css('transition', 'all 0.5s ease-in-out');
});