class scrollPlugin {

  /**
   * 架构函数
   * @param  {String} selector 主要框架的容器
   * @return {void}          继续会运行两个按钮的监听
   */
  constructor( selector ) {
    this.defaultSettings = {
          selector: null,
          speed: 50
        }
    this.defaultSettings.selector = document.querySelector(selector);
    this.listenerLeft();
    this.listenerRight();
  }

  /**
   * 监听左按钮
   * @return {void} void
   */
  listenerLeft() {
    const _self = this;
    const _obj = document.querySelector('.navbtn-left');
    _obj.addEventListener('click', function() {
      _self.runAnimate('left');
    });
  }
  /**
   * 监听右按钮
   * @return {void} void
   */
  listenerRight() {
    const _self = this;
    const _obj = document.querySelector('.navbtn-right');
    console.log(_obj);
    _obj.addEventListener('click', function() {
      _self.runAnimate('right');
    });
  }
  /**
   * 左边移动的动画
   * @param  {Object} box 盒子
   * @return {null}    执行动画 
   */
  leftInterval(box) {
    const speed = this.defaultSettings.speed;
    let _leftAnimate = setInterval(function() {
      let left = box.style.left ? parseInt(box.style.left) : 0;
      let limit = Math.abs(left);
      if (limit > window.innerWidth) {
        clearInterval(_leftAnimate);
      }

      let _animateTimes = left - 50 + 'px';
      box.style.left = _animateTimes;
    },speed);
  }
  /**
   * 右边移动的动画
   * @param  {Object} box 盒子
   * @return {NULL}    执行动画 
   */
  rightInterval(box) {
    const speed = this.defaultSettings.speed;
    let _rightAnimate = setInterval(function() {
      let right = box.style.right ? parseInt(box.style.right) : 0;
      let limit = Math.abs(right);
      if (limit > window.innerWidth) {
        clearInterval(_rightAnimate);
      }

      let _animateTimes = right - 50 + 'px';
      box.style.right = _animateTimes;
    },speed);
  }
  /**
   * 执行动画前的分发，可以说是一个代理模式吧
   * @param  {String} pos 位置，是左边还是右边
   * @return {void}     分发给具体执行动画的函数
   */
  runAnimate(pos) {
    const box = document.querySelector('[data-id=cards]');
    var speed = this.defaultSettings.speed;
    if (pos == 'left') {
      this.leftInterval(box);
    }else{
      this.rightInterval(box);   
    }
  }
}
// 暴露接口
export default scrollPlugin;