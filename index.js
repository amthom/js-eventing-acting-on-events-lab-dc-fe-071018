
var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "pink"
dodger.style.left // "180px"
dodger.style.bottom // "0px"

// move dodger left
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

// move dodger right
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left < 360) {
    dodger.style.left = `${left + 10}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})

// document.addEventListener('keydown', function(e) {
//   console.log(e.which)
// })

// right = 39
// up = 38
// down = 40
