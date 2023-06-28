$(function () {


  //menuをクリックすると.openMenuが追加される
  $('#header__menu').on('click', function () {
    $('#header__menu, #menu__wrap, .gnav__list, #menu__copy').toggleClass('openMenu');
  });

  //menuのページ内リンクをクリックするとmenuが消える
  $('.gnav__link').on('click', function () {
    $('#header__menu, #menu__wrap, .gnav__list, #menu__copy').removeClass('openMenu');
  });

  //スムーススクロール
  $('.gnav__link, .lnav__link, .fnav__link, #footer__ttl-link, #header__ttl-link').on('click', function () {

    const target = $(this).attr('href');
    const targetPos = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPos }, 800);
    // return false;

  });


//プログレスバー
  const elemTop = [];

  function PositionCheck() {

    const headerHeight = $("#header").outerHeight(true);

    $(".scrollPoint").each(function (i) {
      elemTop[i] = Math.round(parseInt($(this).offset().top - headerHeight));
    });
  }

  function ScrollAnime() {
    const scroll = Math.round($(window).scrollTop());
    const NavElem = $(".lnav__list");
    $(".lnav__list").removeClass('current');
    if (scroll >= 0 && scroll < elemTop[1]) {
      $(NavElem[0]).addClass('current');
    }
    else if (scroll >= elemTop[1] && scroll < elemTop[2]) {
      $(NavElem[1]).addClass('current');
    }
    else if (scroll >= elemTop[2] && scroll < elemTop[3]) {
      $(NavElem[2]).addClass('current');
    }
    else if (scroll >= elemTop[3]) {
      $(NavElem[3]).addClass('current');
    }
  }

  $(window).scroll(function () {
    PositionCheck();
    ScrollAnime();
  });

  //meeknessスライド
  //about,works,skill,contactクラス名追加でふわっと表示させる
  const windowHeight = $(window).innerHeight();
  $(window).on('scroll', function () {
    const ST = $(window).scrollTop();
    $('#bg, #about, #works, #skill, #contact').each(function () {
      const target = $(this).offset().top;
      if (ST > target - windowHeight + 200) {
        $(this).addClass('is-enter');
      }
    });

    // worksフェードアップ
    $('.worksFadeup').each(function () {
      const target = $(this).offset().top;
      if (ST > target - windowHeight + 200) {
        $(this).addClass('showElement');
      }
    });

    //下層works
    $('.fadeupTrigger').each(function () {
      const elemPos = $(this).offset().top - 50;
      const ST = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (ST >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');
      }
    });

  });

  //アコーディオンメニュー
  // $(function () {
    $(".skill__list").on("click", function () {
      const target = $('.skill__list').offset().top - 50;

      $(".skill__list").not(this).next().slideUp(500);
      $(this).next().stop().slideToggle(500);
      $('html, body').animate({ scrollTop: target });

      if ($(this).hasClass('skill__list--active')) {
        $(this).removeClass('skill__list--active');
      } else {
        $(".skill__list").removeClass('skill__list--active');
        $(this).addClass('skill__list--active');
      }
    });
  // });

  $('.skill__close').on('click', function () {
    const target = $('.skill__list').offset().top - 50;
    $('.skill__list').next().slideUp(500);
    $('html, body').animate({ scrollTop: target });
    if ($('.skill__list').hasClass('skill__list--active')) {
      $('.skill__list').removeClass('skill__list--active');
    } else {
      $('.skill__list').removeClass('skill__list--active');
      $('.skill__list').addClass('skill__list--active');

    }
  });


});