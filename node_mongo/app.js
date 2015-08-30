/*********************************************************
 * 这是个根据慕课网《nodejs + mongodb》制作的电影网站 ****
 *             初步接触nodejs + mongodb               ****
 *             Mission: Movies Website                ****
 *             Author : I don't know                  ****
 ********************************************************/
 /**
  * require some dependences module
  * like list
  */
var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var _ = require('underscore')
var bodyParser = require('body-parser')
var Movie = require('./models/movie')
var port = process.env.PORT || 3000
var app = express()

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/movie')
//set views directory and engine
app.set('views','./views/pages')
app.set('view engine','jade')
//parser to deal static resource path
app.use(bodyParser())
//mangage time in views.
app.locals.moment = require('moment')
//use parser to connect to resource installed by bower
app.use(express.static(path.join(__dirname,'bower_components')))
//listen port, you know it
app.listen(port)
console.log('port ' + port + ' was listened')

/*************************************************************************
 * Router start                                                    *******
 * @param /                     index                              *******
 * @param /movie/:id            detail                             *******
 * @param /admin/list           admin list like delete something   *******
 * @param /admin/movie/update   update movie information           *******
 * @param /admin/movie/new      add a new moive                    *******
 ************************************************************************/

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


//Add new movie method
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