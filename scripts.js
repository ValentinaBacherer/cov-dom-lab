let counter = 0
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
    const text = document.createTextNode(counter)
    box.addEventListener('click', colorChange)
    box.addEventListener('dblclick', remove)
    box.addEventListener('mouseover', () => {
        box.appendChild(text)
    })
    box.addEventListener('mouseout', () => {
        box.removeChild(text)
    })
    const divButton = document.getElementById('container')
    divButton.appendChild(box)
}

const remove = (e) => {
    if (Number(e.target.id) % 2 === 0) {
        if (e.target.nextSibling != null) {
            e.target.nextSibling.remove()
        } else {
            alert("I don't have next sibling")
        }

    } else {
        if (e.target.previousSibling != null) {
            e.target.previousSibling.remove()
        } else {
            alert("I don't have previus sibling")
        }
    }
}

const colorChange = (e) => {

    const random = Math.floor(Math.random() * colorsArray.length)
    const color = colorsArray[random]
    const box = document.getElementById(e.target.id)
    box.style.backgroundColor = color
}


window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(divBtn)
    document.body.appendChild(divBox)

    createBoxBtn.addEventListener('click', createBox)
})