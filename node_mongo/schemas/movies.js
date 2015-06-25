var mongoose = require('mongoose')
var MoviesSchema = new mongoose.Schema({
	director:String,
	title:String,
	language:String,
	country:String,
	sumary:String,
	flash:String,
	poster:String,
	year:String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})
MoviesSchema.pre('save',function(next){
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now()
	}else{
		this.meta.updateAt = Date.now()
	}
	next()
})
MoviesSchema.statics = {
	fetch:function(cb){
		return this.find({}).sort('meta.updateAt')
		exec(cb)
	},
	findBuId:function(id,cb){
		return this.findOne({_id:id})
		exec(cb)
	}
}
module.exports = MoviesSchema