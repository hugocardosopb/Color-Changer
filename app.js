const historic = [] //armazena as cores geradas
const historic_box = []

let randomId = Math.random()


function generateColor() {
    let container = document.getElementById('paint')
    let box = document.getElementById('corbox')

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let paint = container.style.backgroundColor = `rgb(${r},${g},${b})`
    let paint_box = box.style.backgroundColor = `rgb(${r},${g},${b})`



   //ADICIONA E RETORNA O TXT DA ULTIMA COR GERADA
   //E ADICIONA-OS NO HISTORICO PARA CONSULTA POSTERIOR.
    let add_cor = historic.push(paint)
    let add_cor_box = historic_box.push(paint_box)
    let lastItem_historic = historic[historic.length - 1]
    let lastItem_historic_box = historic_box[historic_box.length - 1]


    let legendaSpan = newElement('span','legenda', randomId)
    legendaSpan.textContent = lastItem_historic
    
    let caixinha = newElement('div', 'corbox')
    caixinha.style.backgroundColor = lastItem_historic
    legendaSpan.appendChild(caixinha)


    let content = document.getElementById('historic')
    content.appendChild(legendaSpan)

    console.log(lastItem_historic_box)
    //-------------------------------------------------
    


}

//FUNÇÃO PARA CRIAR ELEMENTOS COM MAIS FACILIDADE
function newElement(tag, className) {
    let elem = document.createElement(tag)
    elem.className = className
    elem.setAttribute('id', randomId)
    return elem
}

//Executa o botão de gerar cor e aplica uma cor aleatoria
//baseada na função generateColor()
function paint() {
    let btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
        generateColor()
    })
}






paint()
