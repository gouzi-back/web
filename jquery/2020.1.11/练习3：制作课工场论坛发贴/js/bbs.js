$(document).ready(function(){
       $(".bbs header span").click(function(){
              $(".bbs .post").show();
       });
       var tou=new Array("tou01.jpg","tou02.jpg","tou03.jpg","tou04.jpg");
       $(".post .btn").click(function(){
              var $newLi=$("<li></li>");  //创建一个新的li节点元素
              var iNum=Math.floor(Math.random()*4);  //随机获取头像
              var $touImg=$("<div><img src=images/"+tou[iNum]+"></div>");  //创建头像节点
              var $title=$("<h1>"+$(".title").val()+"</h1>"); //设置标题节点
              var newP=$("<p></p>");  //创建一个新的p节点元素
              var myDate=new Date();
              var currentDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
              $(newP).append("<span>版块："+$(".post select").val()+"</span>");  //在p节点中插入版块；
              $(newP).append("<span>发表时间："+currentDate+"</span>");     //在p节点中插入发布时间；
              $($newLi).append($touImg);  //插入头像
              $($newLi).append($title);   //插入标题
              $($newLi).append(newP);    //插入版块、时间内容
              $(".bbs section ul").prepend($newLi);

              $(".post .content").val("");
              $(".post .title").val("");
              $(".post").hide();


       });
})

//需求说明
// 单击我要发贴，弹出发贴界面
// 在标题框中输入标题，选择所属版块，输入帖子内容
// 单击“发布”按钮，新发布的帖子显示在列表的第一个，新帖子显示头像、标题、版块和发布时间
// 使用数组保存发帖者的头像
// 使用函数floor( )和random( )随机获取发帖者的头像
// 使用appendChild ( )把头像、标题、版块、时间插入到页面中
// 设置value值为空来清空当前输入框中的内容
// 使用style属性隐藏发新贴界面