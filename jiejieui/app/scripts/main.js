// jshint devel:true
$(function(){

  var diff = new diffTime('2013/9/14');
  let loveBtn = document.getElementsByClassName('love')[0];

  const getId = id => document.getElementById(id);
  getId('years').innerHTML = diff.years();
  getId('months').innerHTML = diff.months();
  getId('days').innerHTML = diff.days();

  countTime();
  // count hours, minutes and seconds
  // and update every seconds
  function countTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    setTimeout(countTime,500);
    getId('hours').innerHTML = hours;
    getId('minutes').innerHTML = minutes;
    getId('seconds').innerHTML = seconds;
  };


  // Animate in here
  // just using jQuery animate method
  console.log('iamhele.com');


  /**
   * 页面初始化动画效果
   * 每13秒执行一次，每次使得透明度和距离顶部的距离得到改变
   */
  var animate = setInterval(function () {
    let date = document.getElementsByClassName('date')[0];
    let opcaity = Number(date.style.opacity);
    let marginTop = isNaN(parseInt(date.style.marginTop)) ? 0 : parseInt(date.style.marginTop);
    if (opcaity >= 1) {
      clearInterval(animate);
    }

    date.style.opacity = opcaity + 0.01;
    date.style.marginTop = marginTop + 1 + 'px';
  },10);

  /**
   * 对事件进行监听，用以切换页面
   * Notice: 这里的动画效果并不好，有待改进
   */
  loveBtn.addEventListener('click', function() {

    var content = document.querySelector('[data-type="time"]').style;
    let statusChange = (statu) => {

      let copy = document.getElementById('copy').style;
      if(statu == 'block') {
        // content['-webkit-transform'] = 'scale(0)';
        // copy['-webkit-transform'] = 'scale(1)';
        content.display = 'none';
        copy.display    = 'block';
      }else {

        // content['-webkit-transform'] = 'scale(1)';
        // copy['-webkit-transform'] = 'scale(0)';
        content.display = 'block';
        copy.display    = 'none';
      }

    }



    if(content.display == 'block') {
      statusChange('block');
    }else {
      statusChange('none');
    }


  });

  //对loveBtn的事件监听结束


});
