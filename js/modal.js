$(function(){
    // console.log('modalを読み込んだよ');

    //imgの配列を用意
    var modalImg = [
        'img/work01.png',
        'img/work02.png',
        'img/work03.png',
    ];

    $('.work-block').find('section').on('click', function(){
        /* sectionの何番目を押したか */
        var sectionIndex = $(this).index();
        // console.log(sectionIndex);

        /* modalのhtmlを作成 */
        var modalContent = '<figure class="modal"><img src="' + modalImg[sectionIndex] + '" alt=""></figure>'
        // console.log(modalContent);

        /*
            1. #overlayの中にmodalContentを挿入
            2. .fade-inを追加
        */
        $('#overlay').html(modalContent).addClass('fade-in');

        /*
            1. #overlayを再度クリックした時
            2. .fade-inを削除
        */
        $('#overlay').on('click', function(){
            $(this).removeClass('fade-in');
        });
    });
});