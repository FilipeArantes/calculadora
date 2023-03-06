const virgula = document.querySelector('#virgula')
const resultado = document.querySelector('.resultado span')
const limpar = document.querySelector('#clear')
const negativo = document.querySelector('#negative')
const porcentagem = document.querySelector('#percent')

let primeiroValor = ''
let temPrimeiroValor = false
let segundoValor = ''
let temSegundoValor = false
let sinal = ''
let resultadoFinal = ''


function pegarPrimeiroValor(valor) {
    if (temPrimeiroValor == false) {
        resultado.innerHTML = ''
        primeiroValor += valor.target.value
        resultado.innerHTML = primeiroValor
        primeiroValor = +primeiroValor
        limpar.innerHTML = 'C'
    }
    if (temPrimeiroValor == true) {
        resultado.innerHTML = ''
        segundoValor += valor.target.value
        resultado.innerHTML = segundoValor
        segundoValor = +segundoValor
    }
}

function pegarSinal(sing) {
    sinal = sing.target.value
    temPrimeiroValor = true
}

limpar.addEventListener('click', () => {
    limpar.innerHTML = 'AC'
    resultado.innerHTML = '0'
    primeiroValor = ''
    temPrimeiroValor = false
    segundoValor = ''
    temSegundoValor = false
    sinal = ''
    resultadoFinal = ''
})

function igual() {
    if (sinal == "+") {
        resultadoFinal = parseFloat(primeiroValor) + parseFloat(segundoValor)
    }
    if (sinal == "/") {
        resultadoFinal = parseFloat(primeiroValor) / parseFloat(segundoValor)
    }
    if (sinal == "-") {
        resultadoFinal = parseFloat(primeiroValor) - parseFloat(segundoValor)
    }
    if (sinal == "x") {
        resultadoFinal = parseFloat(primeiroValor) * parseFloat(segundoValor)
    }
    resultado.innerHTML = resultadoFinal
    primeiroValor = resultadoFinal
    segundoValor = ''
    checarTamanhoResultado()
}

function checarTamanhoResultado() {
    resultadoFinal = String(resultadoFinal)
    if (resultadoFinal.length >= 8) {
        resultadoFinal = JSON.parse(resultadoFinal);
        resultado.innerHTML = resultadoFinal.toFixed(4)
    }
}

negativo.addEventListener('click', function () {
    resultado.innerHTML = '';
    if (primeiroValor != '') {
        resultadoFinal = -primeiroValor;
        primeiroValor = resultadoFinal;
    }
    if (primeiroValor != '' && segundoValor != '' && sinal != '') {
        resultadoFinal = -resultadoFinal
    }
    resultado.innerHTML = resultadoFinal;
})

porcentagem.addEventListener('click', () => {
    resultado.innerHTML = '';
    if (primeiroValor != '') {
        resultadoFinal = primeiroValor / 100;
        primeiroValor = resultadoFinal;
    }
    if (primeiroValor != '' && segundoValor != '' && sinal != '') {
        resultadoFinal = resultadoFinal / 100;
    }
    resultado.innerHTML = resultadoFinal;
});

virgula.addEventListener('click', function () {
    if (!temPrimeiroValor) {
        primeiroValor += '.'
        resultado.innerHTML = primeiroValor
    }
    if (segundoValor != '') {
        segundoValor += '.'
        resultado.innerHTML = segundoValor
    }
    if (segundoValor == '' && temPrimeiroValor) {
        segundoValor += '0' + '.'
        resultado.innerHTML = segundoValor
    }
})