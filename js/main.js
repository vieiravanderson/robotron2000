const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const botao = document.querySelector('#mudar-cor');
const robotron = document.querySelector('#robotron');

const cores = [
    "../img/robotronAzul.png",
    "../img/robotronAmarelo.png",
    "../img/robotronBranco.png",
    "../img/robotronPreto.png",
    "../img/robotronRosa.png",
    "../img/robotronVermelho.png" 
]

console.log(cores.length);

var i = 0;
botao.addEventListener("click", function (event){
    event.preventDefault();
    mudaCor(robotron, cores);

});


controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
    });
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    
    if(operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas (operacao, peca) {
    //console.log(pecas[peca])
    estatisticas.forEach( (elemento) => {
        //console.log(elemento.dataset.estatistica);
        if(operacao == '+') {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    })
}

function mudaCor (robotron, cores) {
    if(i < cores.length - 1) {
        i ++;
        robotron.src = cores[i];
    } else {
        i = 0;
        robotron.src = cores[i];
    }
    
}
