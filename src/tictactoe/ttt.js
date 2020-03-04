// player clicks square
// 'x' or 'o' is added to square
console.log('$', $)

var previousPlay = null
// function addGamePiece (selectedElement) {
//   console.log('beyonce:', selectedElement)
//   // creating element
//   // var newElement = document.createElement('h1')
//   var newElement =  $("h1")
//   console.log('newElement', newElement)
//   var innerHTMLLength = selectedElement.innerHTML.length
//   previousPlay = setGamePiece(innerHTMLLength)
//   newElement.innerText = previousPlay
//   selectedElement.appendChild(newElement)
// }

// function addGamePiece (selectedElement) {
//   // creating element
//   var newElement = document.createElement('h1')

//   if (previousPlay === 'x') {
//     newElement.innerText = 'o'
//     previousPlay = 'o'
//   } else if (previousPlay === 'o') {
//    newElement.innerText = 'x'
//    previousPlay = 'x'
//  } else {
//    newElement.innerText = 'x'
//    previousPlay = 'x'
// }
//   selectedElement.appendChild(newElement)
// }
// function addGamePiece (selectedElement) {
//   // creating element
//   var newElement = document.createElement('h1')

//   previousPlay = setGamePiece()
//   newElement.innerText = previousPlay
//   selectedElement.appendChild(newElement)
// }
// function setGamePiece() {
//   if (previousPlay === 'x') {
//     return 'o'
//   } else if (previousPlay === 'o') {
//     return 'x'
//   } else {
//     return 'x'
//   }
// }
function addGamePiece (selectedElement) {
  // creating element
  // var newElement = document.createElement('h1')
  var newElement =  $("h1")
  var clickBox = $('.clickBox')
  var box = document.querySelector('.clickBox')
  var box = document.getElementByClassName('clickBox')
  var boxAll = document.querySelectorAll('.clickBox')
  console.log('box', box)
  console.log('boxAll', boxAll)
  console.log('clickBox', clickBox)
  console.log('newElement', newElement)
  if (previousPlay === 'x') {
    newElement.innerText = 'o'
    previousPlay = 'o'
  } else if (previousPlay === 'o') {
   newElement.innerText = 'x'
   previousPlay = 'x'
 } else {
   newElement.innerText = 'x'
   previousPlay = 'x'
}
  selectedElement.append(newElement.innerText)
}
