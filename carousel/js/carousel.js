;(function(){
	var Carousel = function(poster){
		//save object
		this.poster = poster;
		this.posterItemMain = poster.find('ul.poster-list');// 主体内容区域
		this.prevBtn = poster.find('div.poster-prev-btn');// 上个按钮
		this.nextBtn = poster.find('div.poster-next-btn');// 下个按钮
		this.posterItems = poster.find('li.poster-item');// item的个数
		this.posterFirstItem = this.posterItems.eq(0);// 第一帧
		//default settings
		this.settings = {
			"width": 1100,
			"height": 562,
			"posterWidth": 1000,
			"posterHeight": 562,
			"scale":0.9,
			"speed":500,
			"verticalAlign":"middle"
		};
		$.extend(this.settings,this.getSettings());
		console.log(this.settings);


		this.setSettingValues();
		this.setPosterPos();
	};
	Carousel.prototype = {
		/**
		 * [setSettingValues description]
		 * setting the settings at dom
		 */
		setSettingValues : function(){
			var settings = this.settings;
			// images position settings
			this.poster.css({
				width: settings.width,
				height: settings.height,
				posterWidth: settings.posterWidth,
				posterHeight: settings.posterHeight,
				scale:settings.scale,
				speed:settings.speed,
				verticalAlign:settings.verticalAlign
			});
			this.posterItemMain.css({
				width: settings.width,
				height: settings.height
			});

			// btn position settings
			var btnWidth = (this.settings.width - this.settings.posterWidth) / 2;
			this.nextBtn.css({
				width:btnWidth,
				height:this.settings.height,
				zIndex:Math.ceil(this.posterItems.size() / 2)
			});
			this.prevBtn.css({
				width:btnWidth,
				height:this.settings.height,
				zIndex:Math.ceil(this.posterItems.size() / 2)
			});

			this.posterFirstItem.css({
				width:this.settings.posterWidth,
				height:this.settings.posterHeight,
				left:btnWidth,
				right:btnWidth,
				zIndex:Math.ceil(this.posterItems.size() / 2)
			});
		},
		/**
		 * getSettings 获取配置信息
		 * @return {json object} this settings
		 */
		getSettings : function(){
			var settings = this.poster.attr('data-settings');
			if (settings && settings != '') {
				return $.parseJSON(settings);
			}else{
				return {};
			}
		},
		setPosterPos: function(){
			var _self      = this;
			var sliceItems = this.posterItems.slice(1),
					sliceSize  = sliceItems.size()/2,
					rightSlice = sliceItems.slice(0,sliceSize),
					leftSlice  = sliceItems.slice(sliceSize),
					level      = Math.floor(this.posterItems.size()/2);
			var rw         = this.settings.posterWidth,//右边的宽度
					rh         = this.settings.posterHeight,//右边的高度
					gap        = ((this.settings.width - rw)/2)/level//间隙
					;

			var firstLeft = (this.settings.width - this.settings.posterWidth)/2;
			var fixOffsetLeft = firstLeft + rw;
			// 设置右边剩余帧的位置关系，一系列的
			rightSlice.each(function(i){
				level--;
				rw = rw * _self.settings.scale;
				rh = rh * _self.settings.scale;
				var j = i;

				$(this).css({
					zIndex:level,
					width:rw,
					height:rh,
					opacity:1/(++j),
					left:fixOffsetLeft + (++i) * gap - rw,
					top: (_self.settings.height - rh) / 2
				});
			});
			// 设置左边的剩余帧的位置关系，一系列的
			var lw = rightSlice.last().width(),
					lh = rightSlice.last().height(),
					oloop = Math.floor(this.posterItems.size()/2);
			leftSlice.each(function(i){
				oloop--;
				lw = lw / _self.settings.scale;
				lh = lh / _self.settings.scale;
				var j = i;
				console.log('oloop : ' + oloop);
				console.log('opacity : ' + 1/oloop);
				$(this).css({
					zIndex:level,
					width:lw,
					height:lh,
					opacity:1/(++j),
					left:i * gap,
					top: (_self.settings.height - lh) / 2
				});
			});
		}
	};
	/**
	 * initial function
	 * @param  {dom class} posters dom className
	 */
	Carousel.init = function(posters){
		var _this_ = this;
		posters.each(function(){
			new _this_($(this));
		});
	};
	// return Carousel object ar window object
	window["Carousel"] = Carousel;
})(jQuery);