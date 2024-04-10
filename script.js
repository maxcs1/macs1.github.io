const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2
let messages = [
    'Segura??',
    'Segurisisisima?',
    'Ya lo pensaste?',
    'nah piensalo mejor porfa',
    'andale picale que si',
    'andale, soy tu mejor amiguito',
    'si??????',
    'chi?'
    
]

buttonNo.addEventListener('click',()=>{
    fontSize = fontSize + .5
    buttonYes.style.fontSize = `${fontSize}rem`

    const indexRandom = Math.floor (Math.random()*messages.length)

    buttonNo.textContent = messages [indexRandom]
})  
buttonYes.addEventListener('click',()=>{
document.querySelector('#message').style.display = 'flex'
})