jQuery(document).ready(function() {
    $("input").blur(function(){
        var isInputTextNull = $(this).val();
        var currName=this.name;
        if(currName=="username"){
            if(isInputTextNull==''){
                $(this).parent().find('.errorback0').fadeIn();
            }
        }
        if(currName=="newPassword"){
            console.log("aaa");
            if(isInputTextNull==''){
                $(this).parent().find('.errorback1').fadeIn();
            }
            else if($(this).val().length<6||$(this).val().length>10){
                $(this).parent().find('.errorback1').fadeIn();
                $(this).parent().find('.errorText_password').fadeIn();
            }else{
                $(this).parent().find('.errorback1').fadeOut();
                $(this).parent().find('.errorText_password').fadeOut();
            }
        }
        if(currName=="rePassword"){
            if(isInputTextNull==''){
                $(this).parent().find('.errorback2').fadeIn();
            }
            if($(this).parent().find('.password').val()!=$(this).val()){
                $(this).parent().find('.errorback2').fadeIn();
                $(this).parent().find('.errorText_repassword').fadeIn();
            }
            else{
                $(this).parent().find('.errorback2').fadeOut();
                $(this).parent().find('.errorText_repassword').fadeOut();
            }
        }

        // localStorage.setItem("userName",username);
        console.log("sdafadfadsf"+localStorage.getItem("b"));
    });


    // 登录确定按钮事件，提交表单
    // $('.page-container form').submit(function(){
    //     console.log("login");
    //     var  username="hlp";
    //     // var username = $(this).find('.username').val();
    //     // var password = $(this).find('.password').val();
    //     // var rePassword = $(this).find('.rePassword').val();
    //     // if(username == '') {
    //     //     $(this).find('.errorback0').fadeIn();
    //     //     $(this).find('.error').fadeIn('fast', function(){
    //     //         $(this).parent().find('.username').focus();
    //     //     });
    //     //     return false;
    //     // }
    //     // if(password == '') {
    //     //     $(this).parent().find('.errorback1').fadeIn();
    //     //     $(this).find('.error').fadeIn('fast', function(){
    //     //         $(this).parent().find('.password').focus();
    //     //     });
    //     //     return false;
    //     // }
    //     // if(rePassword == '') {
    //     //     console.log("rePassword");
    //     //     $(this).parent().find('.errorback2').fadeIn();
    //     //     $(this).find('.error').fadeIn('fast', function(){
    //     //         $(this).parent().find('.rePassword').focus();
    //     //     });
    //     //     return false;
    //     // }
    //     // else if(rePassword.length<6||rePassword.length>10){
    //     //     $(this).find('.errorback1').fadeIn();
    //     //     $(this).find('.errorText_password').fadeIn();
    //     //     console.log(rePassword.length);
    //     //     return false;
    //     // }
    //     //
    //     // if($(this).find('.password').val()!=$(this).find('.repassword').val()){
    //     //     $(this).find('.errorback2').fadeIn();
    //     //     $(this).find('.errorText_repassword').fadeIn();
    //     //     return false;
    //     // }
    //
    //
    //
    //     // localStorage.setItem("userName",username);
    //     // window.location.href= "test.html";
    //     alert("登录成功！");
    //     window.location.href = "https://www.baidu.com";
    //     window.location.href= "test.html";
    //     // return true;
    //     // self.location = "test.html";
    //     // console.log("sdafadfadsf"+localStorage.getItem("b"));
    // });



    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
        $(this).parent().find('.errorText').fadeOut('fast');
    });

    jQuery('#button').click(function () {
        var username="aaa";
        localStorage.setItem("userName",username);
        window.location.href= "gameRoom.html";
        console.log("adfsd");
        alert("登录成功！");
        
    });
    // $('#button').onclick(function(){
    //     var username = $(this).parent().find('.username').val();
    //     var password = $(this).parent().find('.password').val();
    //     console.log(username+password);
    //     console.log($(this).innerText);
    //     if (username == "a" && password == "123") {
    //         alert("登录成功！");
    //         localStorage.setItem("userName",username);
    //         location.href = "test.html";
    //     } else {
    //         alert("登录失败！");
    //         // myform.onsubmit = new Function("return false");
    //     }
    //
    // });
    // function login() {
    //     var username = $(this).parent().find('.username').val();
    //     var password = $(this).parent().find('.password').val();
    //     console.log(username+password);
    //     console.log($(this).innerText);
    //     if (username == "a" && password == "123") {
    //         alert("登录成功！");
    //         localStorage.setItem("userName",username);
    //         location.href = "test.html";
    //     } else {
    //         alert("登录失败！");
    //         // myform.onsubmit = new Function("return false");
    //     }
    // }

});


