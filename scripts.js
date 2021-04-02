var counter = 0
const colorsArray = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'lightblue']

const createBoxBtn = document.createElement('button')
const createBoxBtnText = document.createTextNode('Create Box')
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
    const divButton = document.getElementById('container')
    console.log(divButton);
    divButton.appendChild(box)

    // document.body.appendChild(box)
}






window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(divBtn)
    document.body.appendChild(divBox)

    createBoxBtn.addEventListener('click', createBox)
})