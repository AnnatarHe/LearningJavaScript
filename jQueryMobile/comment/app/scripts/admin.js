// jshint devel:true
$(function(){
    $('#getInfo').click(function(){
        console.log('the click is working');
        $.ajax({
            url:'../uploads/info.js',
            type:'GET',
            dataType:'text',
            success:function(data){
                console.log(data);
                console.log(data[0].number);
                var regx = '/^/{*/}/';
                var rs = regx.match(data);
                console.log(rs);
            },
            error:function(data,info){
                console.log('error'+info);
            }
        });
    });
});
