function Carousel($ct){
  this.init($ct)
  this.event()
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
    
    this.$carousel.append(this.$li.first().clone())
    this.$carousel.prepend(this.$li.last().clone())
    
    this.$carousel.width((this.$li.length+2)*this.$li.width())
  },
  event: function(){
    this.$forward.on('cick', function(){
      console.log('forward')
    })
    this.$next.on('cick', function(){
      console.log('next')
    })
    this.$btn.on('cick', function(){
      console.log($(this).index)
    })
  },
  playForward: function(){
    
  },
  platNext: function(){
    
  }
}


new Carousel($('.viewport').eq(0))
new Carousel($('.viewport').eq(1))