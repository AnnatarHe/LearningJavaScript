;(function(){
	var Carousel = function(poster){
		//save object
		var self = this;
		this.poster = poster;
		this.posterItemMain = poster.find('ul.poster-list');// 主体内容区域
		this.prevBtn = poster.find('div.poster-prev-btn');// 上个按钮
		this.nextBtn = poster.find('div.poster-next-btn');// 下个按钮
		this.posterItems = poster.find('li.poster-item');// item的个数
		this.posterFirstItem = this.posterItems.first();// 第一帧
		this.posterLastItem = this.posterItems.last();// 第一帧
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

		// execute set values and set position
		this.setSettingValues();
		this.setPosterPos();

		//add event listener
		this.nextBtn.click(function(){
			self.carouseRotate('left');
		});
		this.prevBtn.click(function(){
			self.carouseRotate('right');
		});
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
		/**
		 * 设置位置
		 */
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
				$(this).css({
					zIndex:level,
					width:lw,
					height:lh,
					opacity:1/(++j),
					left:i * gap,
					top: (_self.settings.height - lh) / 2
				});
			});
		},
		/**
		 * [carouseRotate description]
		 * 动画效果展示，顺便切换当前卡片
		 */
		carouseRotate: function(dir){
			var _this = this;
			if (dir == 'left') {

				this.posterItems.each(function(){
					var self = $(this),
							prev = self.prev().get(0) ? self.prev() : _this.posterLastItem,
							width = prev.width(),
							height = prev.height(),
							zIndex = prev.css('zIndex'),
							opacity = prev.css('opacity'),
							left = prev.css('left'),
							top = prev.css('top');
					console.log(prev);
					self.animate({
						width:width,
						height:height,
						zIndex:zIndex,
						opacity:opacity,
						left:left,
						top:top
					});
				});
				console.log('use next btn');
			}else{
				this.posterItems.each(function(){
					var self = $(this),
							next = self.next().get(0) ? self.next() : _this.posterFirstItem,
							width = next.width(),
							height = next.height(),
							zIndex = next.css('zIndex'),
							opacity = next.css('opacity'),
							left = next.css('left'),
							top = next.css('top');
					console.log(next);
					self.animate({
						width:width,
						height:height,
						zIndex:zIndex,
						opacity:opacity,
						left:left,
						top:top
					});
				});
				console.log('use next btn');
			};
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