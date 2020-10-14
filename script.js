const principal = document.getElementById('principal') //buscando elemento no HTML
const cores = ['#ff33cc', '#ff3399', '#ff0066', '#ff0000', '#ff3300', '#FFFF00', '#8A2BE2', '#7FFF00', '#FF00FF'] //array de cores
const quadradosQtd = 500

for(let i = 0; i <quadradosQtd; i++){ //montando quantidade de quadrados na tela
    const quadrado = document.createElement('div') //criando elemento(DIV) usando o método 'document.createElement('div')'
    quadrado.classList.add('quadrado') //adicionando class a esse elemento criado anteriormente

    //criando função para definir um evento a esse elemento criado anteriormente
    quadrado.addEventListener('mouseover', () =>{
            setColorToE1(quadrado) //setando cor a esse elemento no seu hover
    })

    quadrado.addEventListener('mouseout', ()=>{
        removeColorFromE1(quadrado) //removendo a cor ao tirar o mouse
    })

    principal.appendChild(quadrado)
}

function setColorToE1(element){
    const cor = getRandomCor() //chamando a função para sortear uma cor aleatória
    element.style.background = cor //pegando o elemento selecionado e dando a ele essa cor aleatória
    element.style.boxShadow = `0 0 2px ${cor}, 0 0 10px ${cor}` //setando cores a box Shadow
}

function removeColorFromE1(element){
    element.style.background = '#1d1d1d' //removendo a cor que foi setada para uma padrão
    element.style.boxShadow = `0 0 2px #000` //setando cores a box Shadow
}

function getRandomCor(){
    return cores[Math.floor(Math.random() * cores.length)] //fazendo o sorteio de cores aleatórias dentro do array
}