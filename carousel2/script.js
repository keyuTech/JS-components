$('.images > img:nth-child(1)').addClass('center')
$('.images > img:nth-child(2)').addClass('right')
$('.images > img:nth-child(3)').addClass('right')
$('.images > img:nth-child(4)').addClass('right')
$('.images > img:nth-child(5)').addClass('right')
let index = 1
setInterval(()=>{
  $(`.images > img:nth-child(${calc(index)}`).removeClass('center')
  .addClass('left')
  .one('transitionend', (e)=>{
    $(e.currentTarget).removeClass('left').addClass('right')
  })
  $(`.images > img:nth-child(${calc(index + 1)})`).removeClass('right')
  .addClass('center')
  index += 1
}, 2000)

function calc(n){
  if(n > 5){
    n = n % 5
    if(n === 0){
      n = 5
    }
  }
  return n
}