const elementoResposta = document.querySelector('#resposta')
const imputPergunta = document.querySelector('#inputPergunta')
const bntPerguntar = document.querySelector('#bntPerguntar')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]
function fazerPergunta() {
  if (!imputPergunta.value) {
    alert('Digite sua pergunta')
    return
  }
  bntPerguntar.setAttribute('disabled', true)
  const pergunta = '<div>' + imputPergunta.value + '</div>'
  elementoResposta.style.opacity = 1

  const totalResposta = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    imputPergunta.value = ''
    bntPerguntar.removeAttribute('disabled')
  }, 3000)
}
