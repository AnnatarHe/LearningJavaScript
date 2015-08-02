// jshint devel:true
$(function(){
  var now = new Date();
  var leftTime = parseInt((now.getTime() - new Date(2013,9,14)) / 1000);
  var years = parseInt(leftTime / 365 / 24 / 60 / 60);
  var months = parseInt(leftTime / 30 / 24 / 60 / 60 - 12 * years);
  var days = parseInt(leftTime / 60 / 60 / 24 - 365 * years - months * 30);
  $('#years').html(years);
  $('#months').html(months);
  $('#days').html(days);
  countTime();
  // count hours, minutes and seconds
  // and update every seconds
  function countTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    setTimeout(countTime,500);
    $('#hours').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);
  };




  // Animate in here
  // just using jQuery animate method
  console.log('iamhele.com');
  $('.date').animate({
    'opacity':'1',
    'margin-top':'130px'
  },1500);
  $('.love').click(function(){
    console.log($('.time').display);
    $('.static, .dynamic').toggle('slow');
    $('#copy').toggle('slow');
  });


});
