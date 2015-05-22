/**
 * 翻面控制函数
 * @param  {本身} elem 自己
 * @return {翻转}      通过修改class来达成翻转
 */
function turn(elem){
	//1.翻面控制函数
	var cls = elem.className;
	if( /photo-front/.test( cls ) ){
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
 * 或取随机数 范围
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
	for(s in data){
		var _html=template.replace('{{index}}',s)
							.replace('{{img}}',data[s].img)
							.replace('{{caption}}',data[s].caption)
							.replace('{{desc}}',data[s].desc);
		html.push(_html);
	}
	g('#wrap').innerHTML=html.join('');
	rsort(random([0,data.length-1]));
}
addPhotos();
function rsort (n) {
	var photo_center=g('#photo_'+n);
	photo_center.className+=' photo-center';
}