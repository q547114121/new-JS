/**
 * Created by Administrator on 2017/9/12.
 */
$(function () {
    $('p').css('visibility','hidden');
    //获取浏览器窗口高度，以便于背景图片铺设
    $('.banner').css('height',$(document).height()) ;
   //通过表单序列化操作，来给POST请求传值
    $('form').on('submit',function (e) {
     //阻止表单在提交后刷新页面
    e.preventDefault();
    //发出ajax请求
    $.ajax({
            url: '/carrots-admin-ajax/a/login',
            type: 'POST',
            dataType: 'json',
            data: $('form').serialize()
        })
        .done(function(res) {
             console.log(res);
              if(res.code ==-5003){
                        $('p').css('visibility','visible').text('用户名不存在');
                    }else if (res.code ==-5004) {
                        $('p').css('visibility','visible').text('密码错误');
                    }else{
                    //请求成功后跳转页面
                        location.href="js5-result.html";
                    }
        })
        .fail(function(jqXHR,statusText,thrownError) {
            console.log("error");
        });
        
    })
});
