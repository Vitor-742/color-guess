let bod = document.querySelector('body')
let res = Math.ceil(Math.random() * 6)

function text(p1) {
    let texto = document.querySelector('#rgb-color')
    texto.innerHTML = p1
}

function confere(e) {
    let ans = document.querySelector('#answer')
    if (e.target == ans) {
        p.innerText = 'Acertou!'
    } else {
        p.innerText = 'Errou! Tente novamente!'
    }
}

for (i = 1; i <= 6; i += 1) {
    let div = document.createElement('div')
    div.className = 'ball'
    let cor1 = parseInt(Math.random() * 256)
    let cor2 = parseInt(Math.random() * 256)
    let cor3 = parseInt(Math.random() * 256)
    let a = 'rgb(' + cor1 + ', ' + cor2 + ', ' + cor3 + ')'
    console.log(a)
    div.style.background = a
    div.addEventListener('click', confere)
    if (i == res) {
        div.id = 'answer'
        text(a)
    }
    bod.appendChild(div)
}
let p = document.createElement('p')
p.innerText = 'Escolha uma cor'
bod.appendChild(p)
