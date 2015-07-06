// jshint devel:true
$(function(){
    /**
     * 单击获取数据
     */
    console.log('copyright iamhele.com');
    $('#getInfo').click(function(){
        $.ajax({
            url:'../uploads/info.js',
            type:'GET',
            dataType:'text',
            success:function(data){
            //性能问题，使用了字符串的切割函数
            //之后补上。
               var ArrayData = data.split('}');
               //所有都做完了，现在是往里面添加数据。
               for(var i=0;i<ArrayData.length;i++)
                {
                   var json = JSON.parse(ArrayData[i]+'}');
                   var html = '<tr><td>'+json.number+'</td><td>'+json.name+'</td><td>'+json.contact+'</td><td>'+json.content+'</td></tr>';
                   $('.table').append(html);
               }
            },
            error:function(){
                console.log('出现了错误，请联系 hele@iamhele.com 进行解决');
            }
        });
        /*ajax stop*/
    });
})
