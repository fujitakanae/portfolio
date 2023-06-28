//const 変数名 = new Swiper('スライダーのクラス名', {});
//初期化処理。Sは大文字。

const swiperNews = new Swiper('.swiper-news', {
    slidesPerView: 1,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 70
        }
    },

    pagination: {
        el: '.swiper-news__pagination',
        type: "progressbar",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

});