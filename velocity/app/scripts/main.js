// jshint devel:true
;(function($) {
    var container = $('.container');
    var box = $('.box');
    var buddy = $('.buddy');
    var pop = $('.pop');
    var open = $('.btn');
    var close = $('.close');
    var imgs = pop.find('img');

    /**
     * 自定义动画，弹入动画
     */
    $.Velocity.RegisterUI('annatar.slideUpIn', {
      defaultDuration: 500,
      calls: [
        [{opacity: [1,0], translateY: [0,100]}]
      ]
    });

    var seqInit = [{
      elements: container,
      properties: 'annatar.slideUpIn',
      options: {
        delay: 300
      }
    }, {
      elements: box,
      properties: 'annatar.slideUpIn',
      options: {
        sequenceQueue: false
      }
    }, {
      elements: buddy,
      properties: 'annatar.slideUpIn',
      options: {
        sequenceQueue: false,
        delay: 60
      }
    }];

    $.Velocity.RunSequence(seqInit);

    // 开始出厂动画


    $.Velocity.RegisterUI('annatar.slideDownOut', {
      defaultDuration: 500,
      calls: [
        [{opacity: [0,1], translateY: [100,0]}]
      ]
    });
    $.Velocity.RegisterUI('annatar.scaleIn', {
      defaultDuration: 500,
      calls: [
        [{opacity: [1,0], scale: [1, 0.3]}]
      ]
    });


    var seqClick = [{
      elements: container,
      properties: 'annatar.slideDownOut'
    }, {
      elements: box,
      properties: 'annatar.slideDownOut',
      options: {
        sequenceQueue: false
      }
    }, {
      elements: container,
      properties: 'annatar.slideUpIn'
    }, {
      elements: pop,
      properties: 'annatar.slideUpIn',
      options: {
        sequenceQueue: false
      }
    }, {
      elements: imgs,
      properties: 'annatar.scaleIn'
    }];



    open.on('click', function() {
      $.Velocity.RunSequence(seqClick);
    })












  }
)(jQuery);
