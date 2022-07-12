let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => {
//   console.log('User choose: Rock')
// }
// yellowDiv.onclick = () => console.log('You clicked on yellow')
// greenDiv.onclick = () => console.log('You clicked on green')

const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {
  'red': 0,
  'yellow': 0,
  'green': 0
}
// forEach loop
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})

function clearGame(){
  squares.forEach(square => {
    timesClicked[square.value] = 0
    square.innerText = ''
  })
}
