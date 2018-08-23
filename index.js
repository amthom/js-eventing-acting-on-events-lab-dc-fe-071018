Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @amthom Sign out
0
0 5 lbrobb/js-eventing-acting-on-events-lab-dc-fe-071018
forked from learn-co-students/js-eventing-acting-on-events-lab-dc-fe-071018
 Code  Pull requests 0  Projects 0  Insights
js-eventing-acting-on-events-lab-dc-fe-071018/index.js
901506b  39 minutes ago
@lbrobb lbrobb Done.
@lbrobb @drakeltheryuujin @pletcher

46 lines (36 sloc)  903 Bytes
var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "teal"
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
