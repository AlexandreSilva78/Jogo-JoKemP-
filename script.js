/* Arquivo JS para transferência de imagens aleatórias para o body */

// Gera a lista automaticamente de 1 a 27 imagens
const imagens = [];
for (let i = 1; i <= 27; i++) {
    imagens.push(`./assets/backgrounds/JoKemPo${i}.png`);
}

//Pega o <body> diretamente
const corpo = document.body;

// Escolhe uma imagem aleatória
const indiceAleatorio = Math.floor(Math.random() * imagens.length);
const imagemAleatoria = imagens[indiceAleatorio];

// Define a imagem de fundo como fundo fixo
corpo.style.backgroundImage = `url('${imagemAleatoria}')`;

/*--------------------------------- Código do jogo abaixo -----------------------*/

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())

}

/* -------- ENUMS -----*/

const GAME_OPTIONS = {
    ROCK: 'rock', // É só trocar o nome dentro das aspas para trocar o mesmo em todo o código.
    PAPER: 'paper',    
    ASISSORS: 'scissors'
}
/* humanScoreNumber -> Camel Case; devido as letras maiusculas darem a impressão da corcova de camelo.
GAME_OPTIONS -> Snake Case; Deviso ao anderlaine dar a impressão deuma cobra */

const playMachine = () => {
    //Exemplo abaixo de fácil preenchimento no código e edição
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.ASISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

//Resultado do jogo abaixo

const result = document.querySelector('.result')

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + "Maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!"

        result.style.color = 'blue';//Troca a cor do enunciado EX: "Deu Empate!" para Blue.

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ){
        humanScoreNumber++   //Código de pontuação
        humanScore.innerHTML = humanScoreNumber  //Código de pontuação
        result.innerHTML = "Você Ganhou!"
        result.style.color = 'rgb(20, 245, 20)'; //Troca a cor do enunciado EX: "Você Ganhou!" para green.
    } else {
        machineScoreNumber++   //Código de pontuação
        machineScore.innerHTML = machineScoreNumber    //Código de pontuação
        result.innerHTML = "Você Perdeu!"
        result.style.color = 'red'; //Troca a cor do enunciado EX: "Você Perdeu!" para red.
    }
}

/*----------- Código do jogo abaixo para acrescentar valor na pontuação -------------*/

const humanScore = document.querySelector('#human-score')    //Código de pontuação
const machineScore = document.querySelector('#machine-score')   //Código de pontuação

let humanScoreNumber = 0   //Código de pontuação
let machineScoreNumber = 0   //Código de pontuação