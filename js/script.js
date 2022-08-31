
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 
let placar = 0 


let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')


let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  
let vidQuestao = document.querySelector('.videoDaQuestao video')
let pergunta   = document.querySelector('#pergunta')


let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')


let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : 'pk1.png',  
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    imagem       : 'pk2.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Muk",
    alternativaB : "Jolteon",
    alternativaC : "Lickitung",
    alternativaD : "Psyduck",
    correta      : "Lickitung",
}
const q2 = {
    numQuestao   : 2,
    imagem       : 'pk3.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Poliwhirl",
    alternativaB : "Poliwag",
    alternativaC : "Poliwrath",
    alternativaD : "Zubat",
    correta      : "Poliwhirl",
}
const q3 = {
    numQuestao   : 3,
    imagem       : 'pk4.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Porygon2",
    alternativaB : "Golbat",
    alternativaC : "Golem",
    alternativaD : "Porygon",
    correta      : "Porygon",
}
const q4 = {
    numQuestao   : 4,
    imagem       : 'pk5.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Nidorino",
    alternativaB : "Nidoran♀",
    alternativaC : "Nidoking",
    alternativaD : "Nidoqueen",
    correta      : "Nidoran♀",
}
const q5 = {
    numQuestao   : 5,
    imagem       : 'pk6.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Farfetch'd",
    alternativaB : "Slowbro",
    alternativaC : "Graveler",
    alternativaD : "Cubone",
    correta      : "Farfetch'd",
}
const q6 = {
    numQuestao   : 6,
    imagem       : 'pk7.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Teddybear",
    alternativaB : "Jolteon",
    alternativaC : "Pichu",
    alternativaD : "Floreon",
    correta      : "Jolteon",
}
const q7 = {
    numQuestao   : 7,
    imagem       : 'pk8.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Dugtrio",
    alternativaB : "Diglett",
    alternativaC : "Graveler",
    alternativaD : "Rapidash",
    correta      : "Dugtrio",
}
const q8 = {
    numQuestao   : 8,
    imagem       : 'pk1.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Ursaring",
    alternativaB : "Mankey",
    alternativaC : "Chansey",
    alternativaD : "Primeape",
    correta      : "Primeape",
}
const q9 = {
    numQuestao   : 9,
    imagem       : 'pk9.png',  
    pergunta     : "Qual é esse Pokemon...",
    alternativaA : "Seel",
    alternativaB : "Electrode",
    alternativaC : "Voltorb",
    alternativaD : "kakuna",
    correta      : "Voltorb",
}
const q10 = {
    numQuestao   : 10,
    imagem       : 'pk10.gif',  
    pergunta     : "Qual ataque Pokemon é esse...",
    alternativaA : "Explosion beam",
    alternativaB : "Laser beam",
    alternativaC : "High beam",
    alternativaD : "Solar beam",
    correta      : "Solar beam",
}


const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes


numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD


a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')


function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) 
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    
}


alternativas.addEventListener('dblclick', () => {
    
    pontos -= 10 
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    

    let certa = questoes[numeroDaQuestao].correta
    

    if(respostaEscolhida == certa) {
        
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        
        instrucoes.classList.remove('placar')
        
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
