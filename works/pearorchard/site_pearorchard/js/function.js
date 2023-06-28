$(function () {

    //ハンバーガーメニュー
    $('#header__btn').on('click', function () {
        $('#slide').slideToggle();
        $('#header__btn-top').toggleClass('rotateTop');
        $('#header__btn-middle').toggleClass('hideMiddle');
        $('#header__btn-bottom').toggleClass('rotateBottom');
    });

    //mv
    $('#mv__wrap p:not(:first-child)').animate({ opacity: 0 });
    setInterval(function () {
        $('#mv__wrap p:first-child').animate({ opacity: 0 }).next('p').animate({ opacity: 1 }).end().appendTo("#mv__wrap");
    }, 6000);

    //aboutセクションの梨の品種のスライドトグル
    $('#about__btn').on('click', function () {
        $('#about__box').stop().slideToggle(500);
        $('#about__btn').toggleClass('rotateArrow');
    });

    //リンクをクリックするとスライドメニューが戻るÏ
    $('.slide__link').on('click', function () {
        $('#slide').slideUp();
        $('#header__btn-top').removeClass('rotateTop');
        $('#header__btn-middle').removeClass('hideMiddle');
        $('#header__btn-bottom').removeClass('rotateBottom');
    });

    //スムーススクロール
    $('.gnav__link, .slide__link').on('click', function () {

        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 800);

    });


    //左から右に流れるテキスト
    $(window).scroll(function () {

        $('.leftAnime').each(function () {
            const elemPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("slideAnimeLeftRight");
                $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
            }
        });

    });


});