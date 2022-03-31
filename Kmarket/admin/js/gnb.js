$(function(){

    let menu = $('#gnb > li > a');

    menu.click(function(e){
        e.preventDefault();

        let isVisible = $(this).next().is(':visible');
        if(isVisible){
            // 2차 메뉴를 닫음
            $(this).next().slideUp(200);
        }else{
            // 2차 메뉴를 펼침
            $(this).next().slideDown(200);
        }
    });
});