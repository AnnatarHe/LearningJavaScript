var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'
function htmlFilter(html){
    var $ = cheerio.load(html)
    var chapters =$('.learnchapter')


    var courseData = []
    chapters.each(function(item){
        var charpter = $(this)
        var charpterTitle = charpter.find('strong').text()
        var videos = charpter.find('.video').children('li')
        var charpterData = {
            charpterTitle : charpterTitle,
            videos : [] 
        }
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
function printCourseData(courseInfo){
    courseInfo.forEach(function(item){
        var charpterTitle = item.charpterTitle
        console.log(charpterTitle + '')

        item.videos.forEach(function(video){
            console.log('id is ' + video.id + '\t' + 'video Title is:' + video.title+ '\t')
        })
    })
}

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
