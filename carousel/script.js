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
  },
  event: function(){
    
  }
}


new Carousel($('.viewport').eq(0))
nwe Carousel($('.viweport').eq(1))