$(function(){
    $('.slide-contents').slick({
        // 画像下のドット（ページ送り）を表示
        dots: true,
        // 無限スクロールにするかどうか
        infinity: true,
        // 自動再生のスピード
        speed: 500,
        // 一度にスライドする数
        slidesToShow: 1,
        // 自動再生。
        autoplay: true,
        autoplaySpeed: 3000,
        // フェード
        fade: true,
    });
})