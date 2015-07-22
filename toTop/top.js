requirejs.config({
    path: {
        jquery: 'jquery'
    }
});
/**
 * 调用
 */
requirejs(['jquery','back'],function($, back){
  $('#back').back();
});
