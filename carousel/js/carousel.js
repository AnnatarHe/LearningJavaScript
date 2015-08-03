;(function(){
	var Carousel = function(poster){
		//save object
		this.poster = poster;
		this.posterItemMain = poster.find('ul.poster-list');

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


		this.setSettingValues()
	};
	Carousel.prototype = {
		/**
		 * [setSettingValues description]
		 * setting the settings at dom
		 */
		setSettingValues : function(){
			var settings = this.settings;
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