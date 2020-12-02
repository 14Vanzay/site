$('.language-active').click(function () {
    $('.language-items').slideToggle(300);
});


$(".right-block a:first-child").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".one").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$(".footer-right-block a:first-child").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".one").offset().top  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
});


$('.menu-item:first-child').click(function () {
    $('html, body').animate({
        scrollTop: $(".one").offset().top  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
});
$('.menu-item:nth-child(2)').click(function () {
    $('html, body').animate({
        scrollTop: $(".two").offset().top  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
});
$('.menu-item:nth-child(3)').click(function () {
    $('html, body').animate({
        scrollTop: $(".three").offset().top  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
});
$('.menu-item:nth-child(4)').click(function () {
    $('html, body').animate({
        scrollTop: $(".five").offset().top  // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
});

$('.bars').click(function () {
    $('.menu').slideToggle(300);
    $(this).find('i').slideToggle(0);
});