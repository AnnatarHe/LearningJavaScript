$(document).ready(function(){
    var username=$("#username");
    var pwd=$("#pwd");
    $("#login").click(function(){
        $.ajaxStart(
            $("#warning").show().html("logining...")
        ),
        $.ajaxStop(
            $("#warning").show().html("login was done.")
        ),
        loginFunc(username,pwd);
    });
    function loginFunc(name,pwd){
        $.ajax({
            type:"GET",
            url:"php/login.php",
            //data:{date:new Date(),name:name,pwd:pwd},
            data:"?date="+new Date +"&name="+ name + "&pwd" + pwd,
            success:function(data){
                    window.location.href("chatroom.html");
                },
            error:function(data,status){
                alert(data+status);
            }
        })
    }
});