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
//设定URL
var url = 'http://www.imooc.com/learn/348'
/**
 * 用来处理获取到的html，形成可视化的内容
 * @para html 获取到的html内容k
 * @return 处理完成的可读数据
 */
function htmlFilter(html){
    //为了更像jQuery，继续用$
    var $ = cheerio.load(html)
    //找到这个class。很熟吧
    var chapters =$('.learnchapter')


    //课程数据的格式，数组
    var courseData = []
    //针对所有的获取到的课程信息进行处理。用each
    //剩下的基本懂了吧，不是很难
    chapters.each(function(item){
        var charpter = $(this)
        var charpterTitle = charpter.find('strong').text()
        var videos = charpter.find('.video').children('li')
        var charpterData = {
            charpterTitle : charpterTitle,
            videos : [] 
        }
        //因为videos是一个数组，所以得再来一遍的each
        videos.each(function(item){
            var video = $(this).find('.studyvideo')
            var videoTitle = video.text()
            var id = video.attr('href').split('video/')[1]
            charpterData.videos.push({
                title: videoTitle,
                id: id
            })
        })
        courseData.push(charpterData)
    })
    return courseData;
}
/**
 * 这是一个输出控制函数，对生成的组合数据进行格式化处理
 * @para courseInfo 已经经过处理的数据
 * @return 最终输出的数据
 */
function printCourseData(courseInfo){
    courseInfo.forEach(function(item){
        var charpterTitle = item.charpterTitle
        console.log(charpterTitle + '')

        item.videos.forEach(function(video){
            console.log('id is ' + video.id + '\t' + 'video Title is:' + video.title+ '\t')
        })
    })
}

//主入口
http.get(url,function(res){
    var html=''

    res.on('data',function(data){
        html += data
    })
    res.on('end',function() {
        var courseInfo = htmlFilter(html)
        printCourseData(courseInfo)
    })
}).on('error',function(){
    console.log('something error in crawler')
})
