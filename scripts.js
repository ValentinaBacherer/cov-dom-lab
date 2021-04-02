var counter = 0
const colorsArray = ['plum', 'orquid', 'violet', 'orquid', 'darkviolet', 'purple', 'orange', 'lightblue', 'orange', 'rosybrown', 'indigo', 'blueviolet', 'gold']

const createBoxBtn = document.createElement('button')
const createBoxBtnText = document.createTextNode('Add Square')
const divBtn = document.createElement('div')
divBtn.className = 'rowFlex divBtn'
const divBox = document.createElement('div')
divBox.className = 'rowFlex divBox'
divBox.id = 'container'
createBoxBtn.appendChild(createBoxBtnText)
divBtn.appendChild(createBoxBtn)

const createBox = () => {
    const box = document.createElement('div')
    counter++
    box.id = counter
    box.className = 'box'
    box.innerHTML = counter
    box.addEventListener('click', colorChange)
    box.addEventListener('dblclick', remove)
    const divButton = document.getElementById('container')
    divButton.appendChild(box)
}

const remove = (e) => {
    const allSquares = document.getElementsByClassName('box')
    let index
    for (i = 0; i < allSquares.length; i++) {
        if (allSquares[i].id === e.target.id) {
            index = i
        }
    }
    if (Number(e.target.id) % 2 === 0) {
        if (index + 1 <= allSquares.length - 1) {
            const box = allSquares[index + 1]
            box.parentElement.removeChild(box)
        } else {
            alert('No squares to remove.')
        }
    } else {
        if (index - 1 >= 0) {
            const box = allSquares[index - 1]
            box.parentElement.removeChild(box)
        } else {
            alert('No squares to remove.')
        }
    }
}

const colorChange = (e) => {

    const random = Math.floor(Math.random() * colorsArray.length)
    const color = colorsArray[random]
    const box = document.getElementById(e.target.id)
    box.style.backgroundColor = color
    box.style.color = 'rgba(0, 0, 0, 0.15)'
}






window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(divBtn)
    document.body.appendChild(divBox)

    createBoxBtn.addEventListener('click', createBox)
})