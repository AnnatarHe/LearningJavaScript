// jshint devel:true
$(function(){

  var diff = new diffTime('2013/9/14');

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

  var animate = setInterval(function () {
    let date = document.getElementsByClassName('date')[0];
    let opcaity = Number(date.style.opacity);
    let marginTop = isNaN(parseInt(date.style.marginTop)) ? 0 : parseInt(date.style.marginTop);
    if (opcaity >= 1) {
      clearInterval(animate);
    }

    date.style.opacity = opcaity + 0.01;
    date.style.marginTop = marginTop + 1 + 'px';
    console.log(marginTop);
  },10);


  /**
   * 这里修改一下，允许点击事件切换动画
   */
  $('.love').click(function(){
    $('.static, .dynamic').toggle('slow');
    $('#copy').toggle('slow');
  });


});
