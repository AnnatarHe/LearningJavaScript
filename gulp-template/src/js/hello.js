/**
 * 架构函数，用以初始化数据
 * @param selector 类名或者ID
 * @returns {scorllRun} 用以链式调用
 */
function scorllRun( selector ) {
  this.defautSettings.selector = document.querySelector(selector);
  this.listenerLeft();
  this.listenerRight();
  return this;
}
/**
 * 默认数据
 * @type {{selector: null, speed: number}}
 */
scorllRun.prototype.defautSettings = {
  selector: null,
  speed : 50
}

/**
 * 运行左边动画
 * @return void
 */
scorllRun.prototype.runLeftAnimate = function () {
  this.animate('left');
}
/**
 * 运行右边的动画
 * @return void
 */
scorllRun.prototype.runRightAnimate = function () {
  this.animate('right');
}
/**
 * 主要的动画函数
 *
 * 通过传入‘左右’参数来进行具体的动画执行
 *
 * 原理：
 *
 * 分做两个setIntervel， 性能或许不太好，回去用性能更好的AnimationFrame
 * 我又不支持IE10以下了 :(
 *
 * 然后在父元素上定义了position: relative
 * 通过调整 left 和 right 值来进行具体的动画操作
 *
 * 其他：
 *
 * 非常想用CSS3 的一些属性来做，可以获取更好的性能
 *
 * @param pos
 */
scorllRun.prototype.animate = function (pos) {
  // 获取盒子
  var box = document.querySelector('[data-id=cards]');
  // 获取盒子的左边距
  var speed = this.defautSettings.speed;

  if(pos =='left') {
    var _run = setInterval(function() {

      let left = box.style.left ? parseInt(box.style.left) : 0;

      let limit = Math.abs(left);

      if(limit > window.innerWidth) {
        clearInterval(_run);
      }
      var _animateTimes = left - 50 + 'px';
      box.style.left = _animateTimes;
    },speed);
  }else{
    var _run = setInterval(function() {
      let right = box.style.right ? parseInt(box.style.right) : 0;
      let limit = Math.abs(right);
      if(limit > window.innerWidth) {
        clearInterval(_run);
      }

      var _animateTimes = right - 50 + 'px';
      box.style.right = _animateTimes;
    },speed);
  }
}
/**
 * 左旋转按钮的事件监听
 * @return void
 */
scorllRun.prototype.listenerLeft = function() {
  var _self = this;
  var _obj = document.querySelector('.navbtn-left');
  _obj.addEventListener('click', function () {
    _self.runLeftAnimate();
  })
};

/**
 * 右旋转按钮的事件监听
 * @return void
 */
scorllRun.prototype.listenerRight = function() {
  var _self = this;
  var _obj = document.querySelector('.navbtn-right');
  _obj.addEventListener('click', function () {
    _self.runRightAnimate();
  });
  
};
/**
 * 测试数据
 * @type {scorllRun}
 */
var test = new scorllRun('.container');