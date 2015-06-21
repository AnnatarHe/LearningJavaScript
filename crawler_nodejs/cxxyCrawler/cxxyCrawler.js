/**
  *  这是一个按照慕课网的nodejs的课程写的爬虫。
  *  如果你感兴趣，可以从下面的URL进行访问
  *  PS:
  *  说实话，我非常惊异于javascript在服务端的表现。
  *  我非常的喜欢。并相信javascript会越来越好
  **/
//引入http模块，没得说的一步
var http = require('http')
//引入cheerio，用来操作获取到的html进行类似jQuery的操作
var cheerio = require('cheerio')
var iconv = require('iconv-lite');
//设定URL
var url = 'http://cxxy.seu.edu.cn'
/**
 * 用来处理获取到的html，形成可视化的内容
 * @para html 获取到的html内容k
 * @return 处理完成的可读数据
 */
function htmlFilter(html){
    //为了更像jQuery，继续用$
    var $ = cheerio.load(html)
    //找到这个class。很熟吧
    var chapters =$('.f2581')
    return chapters
}

/**
 * 这是一个输出控制函数，对生成的组合数据进行格式化处理
 * @para courseInfo 已经经过处理的数据
 * @return 最终输出的数据
 */
function printCourseData(courseInfo){
    var $ = cheerio.load(courseInfo)
    courseInfo.each(function($item){
        var charpter = $(this)
        var buf = charpter.attr('title')
        var str = iconv.decode(buf, 'GBK')
        console.log(str + '')

    })
}

//主入口
http.get(url,function(res){
    var html=''

    res.on('data',function(data){
        res.setEncoding('binary')
        html += data
    })
    res.on('end',function() {
        var courseInfo = htmlFilter(html)
        printCourseData(courseInfo)
    })
}).on('error',function(){
    console.log('something error in crawler')
})
