/**
 * 调用jquery & scrollto
 * 这个部分是承接两个部分的关键。由前面调用出来，然后这里承接
 * 进行事件的注册，调用。
 * 分别有构造函数
 * _move函数
 * _go函数
 * _checkPosition函数
 */
define(['jquery','scrollto'],function ($,scrollto) {
  function Back (el, opts){
    this.opts = $.extend({}, Back.DEFAULTS, opts);
    this.el = $(el);
    this.scroll = new scrollto.ScrollTo({
      dest:0,
      speed:this.opts.speed
    });
    this._checkPosition();
    if (this.opts.mode == 'move') {
      this.el.on('click', $.proxy( this._move, this));
    }else{
      this.el.on('click', $.proxy( this._go, this));
    }
    $(window).on('scroll', $.proxy(this._checkPosition,this));
  }
  Back.prototype._move = function () {
      this.scroll.move();
  };
  Back.prototype._go = function () {
      this.scroll.go();
  };
  Back.prototype._checkPosition = function () {
    var el = this.el;
    if ( $(window).scrollTop() > this.opts.pos) {

      el.fadeIn();
    }else{
      el.fadeOut();
    }
  };
  //默认参数
  Back.DEFAULTS = {
    mode: 'move',
    pos: $(window).height(),
    speed: 800
  }
  //jQuery 插件写法
  $.fn.extend({
    back:function(opts){
      return this.each(function(){
        new Back(this,opts)
      });
    }
  });
  //返回接口
  return {
    Back:Back
  };
});
