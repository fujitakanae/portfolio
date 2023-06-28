$(function () {
    // ----jQueryの記述----------

    // バーガーアイコン
    $('#btn').on('click', function () {
        $('#btn__top').toggleClass('rotateTop');
        $('#btn__middle').toggleClass('hideMiddle');
        $('#btn__bottom').toggleClass('rotateBottom');
        // スライドメニュー
        $('#slide').toggleClass('translateNav');
    });

    $('.slide__link').on('click', function () {
        $('#btn__top').removeClass('rotateTop');
        $('#btn__middle').removeClass('hideMiddle');
        $('#btn__bottom').removeClass('rotateBottom');
        $('#slide').removeClass('translateNav');
    });

    // リサイズヘッダー
    const mvHeight = $('#mv').height();

    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        if (ST > mvHeight) {
            $('#header').addClass('resizeHeader');
            $('#header__inquiry').addClass('changeColor');
        } else {
            $('#header').removeClass('resizeHeader');
            $('#header__inquiry').removeClass('changeColor');
        }
    });

    // スムーススクロール
    $('.slide__link').on('click', function () {
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos - 200 }, 500);

        return false;
    });


    // モーダル
    $('.service__pic').on('click', function () {
        const modal = $(this).attr('data-modal');
        $(modal).fadeIn(function () {
            $(this).on('click', function () {
                $(this).fadeOut();
            });

            $('.modal__link').on('click', function (clickEvent) {
                clickEvent.stopPropagation();
            });
        });
    });


    // ----ここまで---------
});