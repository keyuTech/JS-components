var colCount
var colHeightArr = []
var imgWidth = $('img').outerWidth(true)

colCount = parseInt($('.waterfall').width()/imgWidth)
console.log(colCount)
for(var i=0; i<colCount; i++){
  colHeightArr[i] = 0
}


$('.waterfall img').on('load', function(){
  var min = colHeightArr[0]
  var minIndex = 0
  for(var i=0; i<colCount; i++){
    if(colHeightArr[i]<min){
      min = colHeightArr[i]
      minIndex = i
    }
  }
  
  $(this).css({
    left: minIndex * imgWidth,
    top: min
  })
  colHeightArr[minIndex] += $(this).outerHeight(true)
})