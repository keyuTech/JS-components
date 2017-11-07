function Carousel($ct){
  this.init($ct)
  this.event()
  this.autoPlay()
}
Carousel.prototype = {
  init: function($ct){
    this.$ct = $ct
    this.$viewport = this.$ct
    this.$carousel = this.$ct.find('.carousel')
    this.$li = this.$ct.find('.carousel>li')
    this.$forward = this.$ct.find('#icon-left')
    this.$next = this.$ct.find('#icon-right')
    this.$btn = this.$ct.find('.btn')
    this.index = 0
    this.isAnimate = false
    
    this.$imgWidth = this.$li.width()
    this.$imgCount = this.$li.length
    
    this.$carousel.append(this.$li.first().clone())
    this.$carousel.prepend(this.$li.last().clone())
    this.$carousel.width(this.$imgWidth*(this.$imgCount+2))
    
    this.$carousel.css('left', -this.$imgWidth)
  },
  event: function(){
    var me = this
    this.$forward.on('click', function(){
      me.playForward(1)
    })
    this.$next.on('click', function(){
      me.playNext(1)
    })
    this.$btn.on('click', function(){
      var index = $(this).index()
      if(index > me.index){
        me.playNext(index - me.index)
      }else{
        me.playForward(me.index - index)
      }
    })
  },
  playForward: function(len){
    var me = this
    if(this.isAnimate) return
    this.isAnimate = true
    this.$carousel.animate({
      left: '+='+me.$imgWidth*len
    }, 1000, function(){
      me.index -= len
      if(me.index < 0){
        me.$carousel.css('left', -me.$imgWidth*me.$imgCount)
        me.index = me.$imgCount - 1
      }
      me.setBtn()
      me.isAnimate = false
    })
  },
  playNext: function(len){
    if(this.isAnimate) return
    this.isAnimate = true
    var me = this
    this.$carousel.animate({
      left: '-='+me.$imgWidth*len
    }, 1000, function(){
      me.index += len
      if(me.index === me.$imgCount){
        me.$carousel.css('left', -me.$imgWidth)
        me.index = 0
      }
      me.setBtn()
      me.isAnimate = true
    })
  },
  setBtn: function(){
    this.$btn.eq(this.index).addClass('active').siblings().removeClass('active')
  },
  autoPlay: function(){
    var me = this
    this.clock = setInterval(function(){
      me.playNext(1)
    }, 1000)
  },
  stopAuto: function(){
    clearInterval(this.clock)
  }
}


var a = new Carousel($('.viewport').eq(0))
var b =   new Carousel($('.viewport').eq(1))