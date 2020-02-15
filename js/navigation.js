$(function(){
    // console.log('navigationを読み込んだよ');

    /*
        フラグ（旗)
        ボタンがopenの時：true, ボタンがcloseの時：false
    */
   var flag = true;

    /*
        ボタンがopenの時(flag === true)
            1 ボタンを押す
            2 ナビゲーションを表示にする
            3 ボタン画像をcloseに変更する
            4 flagをfalseに変更する
        
        ボタンがcloseの時(flag === false)
            1 ボタンを押す
            2 ナビゲーションを非表示にする
            3 ボタン画像をopenに変更する
            4 flagをtrueに変更する
    */

    $('.open').on('click', function(){
        if(flag === true)
        {
            $('header nav').addClass('fade-in').removeClass('fade-out');
            $(this).find('img').attr('src', 'img/sp/close.svg');
            flag = false;
        }
        else
        {
            $('header nav').removeClass('fade-in').addClass('fade-out');
            $(this).find('img').attr('src', 'img/sp/open.svg');
            flag = true;
        }
    });




    /*
        メニューがopenの時に押したら、menuをフェードインして、flagをfalse
        メニューがcloseの時に押したら、menuをフェードアウトして、flagをtrue
    */
    // $('.open').on('click', function(){
    //     if(flag === true)
    //     {
    //         $('header nav')
    //             .css('display', 'block')
    //             .addClass('fade-in')
    //             .removeClass('fade-out');
    //         $('.open img').attr('src', 'img/sp/close.svg');
    //         flag = false;
    //     }
    //     else
    //     {
    //         $('header nav')
    //             .removeClass('fade-in')
    //             .addClass('fade-out')
    //             .delay(1000)
    //             .queue(function() {
    //                 $(this).css('display', 'none').dequeue();
    //             });
    //         $('.open img').attr('src', 'img/sp/open.svg');
    //         flag = true;
    //     }
    // });

});