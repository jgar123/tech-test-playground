function main() {

  const fruity = document.querySelector('#fruity')
  const button = document.querySelector('.button')
  const result = document.querySelector('#result')
  const slotContainer = document.createElement('div')
  const slotNumber = 4
  const colours = ['black', 'yellow', 'green', 'red']
  const cells = []

  let playerMoney = 100
  let slotMoney = 1000

  // Creating slots

  slotContainer.classList.add('slotContainer')

  for (let i = 0; i < slotNumber; i++) {
    const slot = document.createElement('div')
    slot.classList.add('slot')
    slot.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)]
    cells.push(slot)
    slotContainer.appendChild(slot)
  }
  fruity.appendChild(slotContainer)

  ////////////////////////////////


  button.addEventListener('click', () => {
    const matches = []
    for (let i = 0; i < slotNumber; i++) {
      cells[i].style.backgroundColor = ''
      cells[i].style.backgroundColor = colours[Math.floor(Math.random() * colours.length)]
      matches.push(cells[i].style.backgroundColor)
    }
    result.style.display = 'block'
    new Set(matches).size === 1 ? result.innerHTML = 'WINNER' : result.innerHTML = 'LOSER'
  })

}

window.addEventListener('DOMContentLoaded', main)