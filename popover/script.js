$('.clickMe').on('click', function(e){
  if($('.popover').hasClass('active')){
    $('.popover').removeClass('active')
    console.log(1)
  }else{
    $('.popover').addClass('active')
    $(document).one('click', function(){
      $('.popover').removeClass('active')
    })
  }

})

$('.wrapper').on('click', function(e){
  e.stopPropagation()
})