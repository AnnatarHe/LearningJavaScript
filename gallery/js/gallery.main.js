/**
 * 翻面控制函数
 * @param  {本身} elem 自己
 * @return {翻转}      通过修改class来达成翻转
 */
function turn(elem){
	//1.翻面控制函数
	var cls = elem.className;
	var n=elem.id.split('_')[1];
	if (!/photo-center/.test(cls)) {
		return rsort(n);
	}

	if( /\s*photo-front\s*/.test( cls ) ){
		cls=cls.replace(/photo-front/,'photo-back');
	}else{
		cls=cls.replace(/photo-back/,'photo-front');
	}
	return elem.className=cls;
}
/**
 * 通用函数g
 * @param  {选择器} selector 类似于jQuery的$("#id")
 * @return {选择} 选择器的返回
 */
function g(selector){
	var method=selector.substr(0,1) =='.'?'getElementsByClassName':'getElementById';
	return document[method](selector.substr(1));
}
/**
 * 获取随机数 范围
 * @param  {数组} range 最大值和最小值的数组
 * @return {数字}       随机数
 */
function random (range) {
	var max=Math.max(range[0],range[1]);
	var min=Math.min(range[0],range[1]);
	var diff=max-min;
	var number=Math.ceil(Math.random()*diff+min);
	return number;
}

var data=data;
function addPhotos () {
	var template=g('#wrap').innerHTML;
	var html=[];
	var nav=[];
	for(s in data){
		//双向绑定的赋值
		var _html=template.replace('{{index}}',s)
							.replace('{{img}}',data[s].img)
							.replace('{{caption}}',data[s].caption)
							.replace('{{desc}}',data[s].desc);
		html.push(_html);
		nav.push('<span class="i" id="nav_'+s+'" onclick="turn(g(\'#photo_'+s+'\'))">&nbsp;</span>');
	}
	html.push('<div class="nav">'+nav.join('')+'</div>')
	g('#wrap').innerHTML=html.join('');
	rsort(random([0,data.length-1]));
}
addPhotos();

/**
 * 计算左右分区的大小
 * 这一段好复杂啊
 * @return {} 左右分区的位置
 */
function range(){
	var range={ left:{ x:[] , y:[] }, right:{ x:[] , y:[] } };
	var wrap={
		w:g('#wrap').clientWidth,
		h:g('#wrap').clientHeight
	};
	var photo={
		w:g('.photo')[0].clientWidth,
		h:g('.photo')[0].clientHeight
	};
	range.wrap=wrap;
	range.photo=photo;

	range.left.x=[ 0-photo.w , wrap.w/2-photo.w/2 ];
	range.left.y=[ 0-photo.h , wrap.h];

	range.right.x=[ wrap.w/2+photo.w/2 , wrap.w+photo.w];
	range.right.y=range.left.y;
	return range;
}

/**
 * 排序
 * @param  {参数} n 传进来的随机数
 * @return {[type]}   [description]
 */
function rsort (n) {
	//获取当前所有图片
	var _photo=g('.photo');
	//把图片定义成数组
	var photos=[];
	//标准的循环，用正则取消掉photo_center样式
	//front
	//back
	//left
	//right
	for(s=0;s<_photo.length;s++){
		_photo[s].className=_photo[s].className.replace(/\s*photo-center\s*/,' ');
		_photo[s].className=_photo[s].className.replace(/\s*photo-front\s*/,' ');
		_photo[s].className=_photo[s].className.replace(/\s*photo-back\s*/,' ');
		_photo[s].className+=' photo-front';
		_photo[s].style.left='';
		_photo[s].style.top='';
		_photo[s].style['-webkit-transform']='rotate(0deg) scale(1.3)';
		//推进栈里
		photos.push(_photo[s]);
	}
	//用随机数倒腾出一个图片
	var photo_center=g('#photo_'+n);
	//给它附上样式
	photo_center.className+=' photo-center';

	//从整个photo中去掉photo_center
	photo_center=photos.splice(n,1)[0];

	//左右两边的海报切分一下
	var photo_left=photos.splice(0,Math.ceil(photos.length/2));
	var photo_right=photos;

	//调用函数，获取极限位置
	var ranges=range();
	for(s in photo_left)
	{
		var photo=photo_left[s];
		//调用之前写好的random来进行范围随机数的处理
		photo.style.left= random(ranges.left.x) + 'px';
		photo.style.top= random(ranges.left.y) + 'px';
		photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(1)';
	}
	for(s in photo_right)
	{
		var photo=photo_right[s];
		//调用之前写好的random来进行范围随机数的处理
		photo.style.left= random(ranges.right.x) + 'px';
		photo.style.top= random(ranges.left.y) + 'px';
		photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(1)';
	}

	//控制按钮处理
	var navs=g('.i');
	for(var s=0;s<navs.length;s++)
	{
		navs[s].className=navs[s].className.replace(/\s*i_current\s*/,' ');
		navs[s].className=navs[s].className.replace(/\s*i_back\s*/,' ');
	}
	g('#nav_'+n).className +=' i_current';
	console.log(photos.length);
}