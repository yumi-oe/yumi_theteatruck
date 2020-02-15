$(function(){
    $(window).on('scroll', function(){
        // console.log('scrollFadeを読み込んだよ');

        /* トップからのスクロール位置 */
        var dy = $(this).scrollTop();
        // console.log(dy);

        /* .work-blockの高さを取得 */
        var workBlockTop = $('.work-block').offset().top;
        // console.log(workBlockTop);

        /* スクロール位置が.work-blockの位置を超えたらfade-inのクラスを追加 */
        if( dy > workBlockTop - $(window).height()){
            $('.work-block section').addClass('fade-in');
        }
    });
});