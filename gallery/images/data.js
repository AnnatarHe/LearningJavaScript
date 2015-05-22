var data=[];

var dataStr='1、霍比特人3<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
<br>\
<br>\
2、归来<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
<br>\
<br>\
3、abduction<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
<br>\
<br>\
4、绿灯侠<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
<br>\
<br>\
5、captionAmerican<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
<br>\
<br>\
6、kongfuking<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
<br>\
<br>\
7、byongtow<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
<br>\
<br>\
8、sprideman<br>\
<br>\
导演：你猜：<br>\
片长：141分钟<br>\
';
var d=dataStr.split('<br><br><br>');
for(var i=0;i<d.length;i++){
	var c=d[i].split('<br><br>');
	data.push({
		img:c[0].replace('、',' ')+'.jpg',
		caption:c[0].split('、')[1],
		desc:c[1]
	});
	console.log(c[0].replace('、',' ')+'.jpg');
}