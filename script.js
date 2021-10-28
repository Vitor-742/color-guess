let bod = document.querySelector('body')
let sec = document.querySelector('#sec')

function text(p1) {
    let texto = document.querySelector('#rgb-color')
    texto.innerHTML = 'Qual cor tem ' + p1
}

function confere(e) {
    let ans = document.querySelector('#correto')
    if (e.target == ans) {
        p.innerText = 'Acertou!'
    } else {
        p.innerText = 'Errou! Tente novamente!'
    }
}

function iniciar() {
    let res = Math.ceil(Math.random() * 6)
    sec.innerHTML = ''
    for (i = 1; i <= 6; i += 1) {
        let div = document.createElement('div')
        div.className = 'ball'
        let cor1 = parseInt(Math.random() * 256)
        let cor2 = parseInt(Math.random() * 256)
        let cor3 = parseInt(Math.random() * 256)
        let a = 'rgb(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')'
        div.style.background = a
        div.addEventListener('click', confere)
        if (i == res) {
            div.id = 'correto'
            text(a)
        }
        sec.appendChild(div)
        p.innerText = 'Escolha uma cor'
    }
}

let p = document.createElement('p')
p.id = 'answer'
p.innerText = 'Escolha uma cor'

iniciar()

bod.appendChild(p)

let btn = document.createElement('button')
btn.id = 'reset-game'
btn.addEventListener('click', iniciar)
btn.innerText = 'Reiniciar'
bod.appendChild(btn)