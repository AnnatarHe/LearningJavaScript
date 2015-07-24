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
   });
