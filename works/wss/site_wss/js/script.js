$(function () {

    //----------------背景色が伸びて文字-----------------------

    $(function square__anime() {
        $(window).on('scroll load', function () {
            $('.show').each(function () {
                const position = $(this).offset().top;
                const scroll = $(window).scrollTop();
                const windowHeight = $(window).height();
                if (scroll >= position - windowHeight) {
                    $(this).addClass('square__anime');
                }
            });
        });
    });

    $(function appear() {
        $(window).on('scroll load', function () {
            $('.trigger').each(function () {
                const position = $(this).offset().top;
                const scroll = $(window).scrollTop();
                const windowHeight = $(window).height();
                if (scroll >= position - windowHeight) {
                    $(this).addClass('appear');
                }
            });
        });
    });


    //---------------mvスライド-------------------------

    const count = $('.mv__bottom--pic').length;
    const current = 1;
    const next = 2;
    const interval = 4000;
    const duration = 500;

    $('.mv__bottom--pic:not(:first-child)').hide();
    timer = setInterval(slideTimer, interval);
    function slideTimer() {
        $('.mv__bottom--pic:nth-child(' + current + ')').fadeOut(duration);
        $('.mv__bottom--pic:nth-child(' + next + ')').fadeIn(duration);
        current = next;
        next = ++next;
        if (next > count) {
            next = 1;
        }
    }


    //----------Q&A下層ページ-------------------


    $('.question__questionbox').on('click', function () {
        $(this).toggleClass('selected');
        $(this).next().slideToggle();
        $(this).css('transform');
        $('.question__questionbox').not($(this)).next().slideUp();
        $('.question__questionbox').not($(this)).removeClass('selected');
    })


});