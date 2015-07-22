/**
 * 基础的动画效果和执行函数
 * 具体的方法
 */

define(['jquery'],function($) {
  function ScrollTo( opts ) {
    this.opts = $.extend({},ScrollTo.DEFAULTS,opts);
    this.el = $('html, body');
  }
  ScrollTo.prototype.move = function () {
    var opts = this.opts;
    var el = this.el;

    if ($(window).scrollTop() != opts.dest && ! el.is(':animated')) {
      el.animate({
        scrollTop:opts.dest
      },opts.speed);
    }

  };
  ScrollTo.prototype.go = function () {
    var dest = this.opts.dest;
    if ( $(window).scrollTop() != dest ) {
      this.el.scrollTop(dest);
    }
  };
  //默认参数
  ScrollTo.DEFAULTS = {
    dest: 0,
    speed: 800
  };
  //返回接口
  return {
    ScrollTo:ScrollTo
  }
})
