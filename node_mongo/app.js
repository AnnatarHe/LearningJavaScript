var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var Movie = require('./models/movie')
var port = process.env.PORT || 3000
var app = express()

mongoose.connect('mongoose://localhost/movie')

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('port ' + port + ' was listened')
//there is index page
app.get('/',function(req,res){
    Movie.fetch(function(err,movies){
        if (error) {
            console.log(err)
        }
        res.render('index.jade',{
            title:'Index page',
            movies:movies
        })
    })

    
})
//there is list page
app.get('/admin/list',function(req,res){
    res.render('list.jade',{
        title:'there is list page'
    })
})
//detail page
app.get('/movies/:id',function(req,res){
    var id = req.params.id

    Movie.findOneById(id,function(err,movie){
        res.render('detail.jade',{
            title:'there is detail page'
        })
    })
})
//admin page
app.get('/admin/movie',function(req,res){
    res.render('admin.jade',{
        title:'there is admin page'
    })
})
