let $buttons = $('.menuImg')
let $images = $('.images')

function slide(){
  $buttons.on('click', function(e){
    let index = $(e.currentTarget).index()
    $(e.currentTarget).addClass('active').siblings().removeClass('active')
    $images.css({'transform': `translateX(${- index * 920}px)`})
  })
}
slide()