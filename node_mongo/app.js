var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('port ' + port + ' was listened')
//there is index page
app.get('/',function(req,res){
    res.render('index.jade',{
        'title':'hello hele',
        'movies':[
        {
            'title':'hadhf',
            '_id':'1',
            'poster':'fd'
        },
        {
            'title':'hadhf',
            '_id':'2',
            'poster':'fd'
        }
        ]
    })
})
//there is list page
app.get('/admin/list',function(req,res){
    res.render('list.jade',{
        'title':'there is list page'
    })
})
//detail page
app.get('/movies/:id',function(req,res){
    res.render('detail.jade',{
        'title':'there is detail page'
    })
})
//admin page
app.get('/admin/movie',function(req,res){
    res.render('admin.jade',{
        'title':'there is admin page'
    })
})
