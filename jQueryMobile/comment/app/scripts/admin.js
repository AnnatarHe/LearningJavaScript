// jshint devel:true
$(function(){
    $('#getInfo').click(function(){
        console.log('the click is working');
        $.ajax({
            url:'../uploads/info.js',
            type:'GET',
            dataType:'text',
            success:function(data){
               var ArrayData = data.split('}');
               console.log(ArrayData);
               //所有都做完了，现在是往里面添加数据。
               console.log(ArrayData.length);
               for(var i=0;i<ArrayData.length;i++)
                {
                   var json = JSON.parse(ArrayData[i]+'}');
                   console.log(json);
                   var html = '<tr><td>'+json.number+'</td><td>'+json.name+'</td><td>'+json.contact+'</td><td>'+json.content+'</td></tr>';
                   $('.table').append(html);
               }
            },
            error:function(data,info){
                console.log('error'+info);
            }
        });
        /*ajax stop*/
    });
})
