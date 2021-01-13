$(function () {
    //记录当前位置
    var index = 0;
    //显示左右侧按钮
    $(".adver").hover(function () {
        $(".arrowLeft,.arrowRight").toggle();
    })
    //左侧按钮
    $(".arrowLeft").click(function () {
        index--;
        if (index < 0) {
            index = 5;
        }
        $(".adver").css("background","url(images/adver0" + (index+1) + ".jpg)");
        $("ul li:nth-of-type("+(index+1)+")").css("background","orange").siblings().css("background","black");
    });
    //右侧按钮
    $(".arrowRight").click(function () {
        index++;
        if(index > 5) {
            index = 0;
        }
        $(".adver").css("background","url(images/adver0" + (index+1) + ".jpg)");
        $("ul li:nth-of-type("+(index+1)+")").css("background","orange").siblings().css("background","black");
    });
    //切换图片
    $("ul li").hover(function () {
        index = $(this).index();
        $(".adver").css("background","url(images/adver0" + (index+1) + ".jpg)");
        $("ul li:nth-of-type("+(index+1)+")").css("background","orange").siblings().css("background","black");
    });
    //定时滚动
    var runId = "";
    function run() {
        runId = setInterval(function(){
            index++;
            if(index > 5) {
                index = 0;
            }
            $(".adver").css("background","url(images/adver0" + (index+1) + ".jpg)");
            $("ul li:nth-of-type("+(index+1)+")").css("background","orange").siblings().css("background","black");
        },1000);
    }
    run();
    //移入暂停和移出恢复定时滚动
    $(".adver").mousemove(function () {
        clearInterval(runId);
    }).mouseout(function () {
        run();
    })

})