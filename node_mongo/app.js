var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var _ = require('underscore')
var bodyParser = require('body-parser')
var Movie = require('./models/movie')
var port = process.env.PORT || 3000
var app = express()

mongoose.connect('mongodb://localhost:27017/movie')

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser())
app.locals.moment = require('moment')
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('port ' + port + ' was listened')
//there is index page
app.get('/',function(req,res){
    Movie.fetch(function(err,movies){
        if (err) {
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
    Movie.fetch(function(err,movies){
        if (err) {
            console.log(err)
        }
        res.render('list.jade',{
            title:'list page',
            movies:movies
        })
    })
})
//detail page
app.get('/movie/:id',function(req,res){
    var id = req.params.id

    Movie.findById(id,function(err,movie){
        res.render('detail.jade',{
            title:'Movie' + movie.title,
            movie:movie
        })
    })
})
//admin page
app.get('/admin/movie',function(req,res){
    res.render('admin.jade',{
        title:'there is admin page',
        movie:{
            title:'',
            director:'',
            country:'',
            year:'',
            poster:'',
            flash:'',
            sumary:'',
            language:''
        }
    })
})
//admin update
app.get('/admin/movie/update/:id',function(req,res){
    var id = req.params.id
    if (id) {
        Movie.findById(id,function(err,movie){
            if (err) {
                colsole.log(err)
            }
            res.render('admin',{
                title:'Update Page',
                movie:movie
            })
        })
    };
})


//admin post movie
app.post('/admin/movie/new',function(req,res){
    var id = req.body.movie._id
    var movieObj = req.body.movie
    var _movie

    if (id !== 'undefined') {
        Movie.findById(id,function(err,movie){
            if (err) {
                console.log(err)
            }
            _movie = _.extend(movie,movieObj)
            _movie.save(function(err,movie){
                if (err) {
                    console.log(err)
                }

                res.redirect('/movie/' + movie._id)
            })
        })
    }else{
        _movie = new Movie({
            director:movieObj.director,
            title:movieObj.title,
            country:movieObj.country,
            language:movieObj.language,
            year:movieObj.year,
            poster:movieObj.poster,
            sumary:movieObj.sumary,
            flash:movieObj.flash
        })
        _movie.save(function(err,movie){
            if (err) {
                console.log(err)
            }
            res.redirect('/movie/' + movie._id)
        })
    }
})

//DELETE method
app.delete('/admin/list',function(req,res){
    var id = req.query.id

    if (id) {
        Movie.remove({_id:id},function(err,movie){
            if (err) {
                console.log(err)
            }else{
                res.json({success:1})
            }
        })
    }
})