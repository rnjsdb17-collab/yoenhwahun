// 가로
$(function () { //on DOM ready 
    $("#scroller").simplyScroll({
        speed: 3, //숫자가 올라갈수록 스피드가 빨라짐
        frameRate: 15, //숫자가 올라갈수록 스피드가 느려짐
        // direction: 'backwards',
    });
});
