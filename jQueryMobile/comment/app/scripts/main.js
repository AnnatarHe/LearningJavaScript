// jshint devel:true
$(function(){
	/**
	 * 页面初始化进行一个小动画
	 */
	$('#form').css({
		'opacity':'1',
		'transition':'all .9s',
		'transform':'rotate(0deg)'
	});
	console.log('copyright:iamhele.com');
	/**
	 * 表单提交事件
	 * @param  {Event}  阻止事件冒泡，禁止默认的提交行为
	 * @return {}   
	 */
	$('#submit').click(function(event){
		//阻止事件，获取元素
		event.preventDefault();
		$('#submit').addClass('disable');
		var number    = $('#number');
		var name      = $('#name');
		var contact   = $('#contact');
		var content   = $('#content');
		//检查错误
		if (!Error(number,name,contact,content)) {
			return true;
		}else{
			//界面正确调整，添加loading动画
			success();
			var loading = '<div class="loading-block"><div class="loading"></div><p>正在提交数据...</p></div>';
			$('body').append(loading);
			//表单提交
			$.post('/post/Comment.php',{
				number:number.val(),
				name:name.val(),
				contact:contact.val(),
				content:content.val()
			},function(data){
				//去除loading画面，显示成功画面，最后跳转到学校首页
				$('loading-block').remove();
				var sucInfo = '<div class="upload-done"> <span class="glyphicon glyphicon-ok"></span> 提交成功</div>';
				$('body').append(sucInfo);
				setTimeout(function(){
					window.location.href = 'http://cxxy.seu.edu.cn';
				},3000);
			})
			return true;
		}
		
	});
	/**
	 * 统一进行错误处理
	 * @param {Object} number  dom
	 * @param {Object} name    dom
	 * @param {Object} contact dom
	 * @param {Object} content dom
	 */
	function Error(number,name,contact,content){
		if (number.val().length<7) {
			showError('number');
			return false;
		};
		if (name.val().length<2) {
			showError('name');
			return false;
		};
		if (contact.val().length<5) {
			showError('contact');
			return false;
		};
		if (content.val().length<5 || content.val().length>255) {
			showError('content');
			return false;
		};
		return true;
	}
	/**
	 * 展示错误
	 * 主要有两个方面，第一，向上寻找父元素，在form-group上添加error的伪类
	 * 第二显示错误
	 * 然后返回true，使得上一层函数继续
	 * @param  {String} dom dom节点
	 * @return {boolen}     使得函数得以继续进行
	 */
	function showError(dom){
		$('#'+dom).parent().parent().addClass('has-error');
		$('#'+dom+'Error').slideDown();
		return true;
	}
	/**
	 * 所有验证完毕，进行页面的正确调整
	 * @return {boolen} 不需要返回，事件就可以继续运行。
	 */
	function success(){
		$('.form-group').removeClass('has-error').addClass('has-success');
		$('.alert').slideUp();
	}
})
