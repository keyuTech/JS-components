let index
init()
setInterval(()=>{
  setLeave(getImg(index)).one('transitionend', (e)=>{
    setEnter($(e.currentTarget))
  })
  setCenter(getImg(index+1))
  index += 1
}, 2000)


function init(){
  index = 1
  getImg(index).addClass('center')
  .siblings().addClass('enter')
}

function setCenter($node){
  return $node.removeClass('enter leave').addClass('center')
}
function setEnter($node){
  return $node.removeClass('leave center').addClass('enter')
}
function setLeave($node){
  return $node.removeClass('enter center').addClass('leave')
}

function getImg(index){
  return $(`.images > img:nth-child(${calc(index)}`)
}
function calc(n){
  if(n > 5){
    n = n % 5
    if(n === 0){
      n = 5
    }
  }
  return n
}