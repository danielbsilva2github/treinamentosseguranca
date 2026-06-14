let cliques = 0;

function mudarCor() {
  cliques++;

  // Gera uma cor aleatória
  const cor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = cor;

  // Atualiza o contador
  document.getElementById('contador').textContent =
    `Você clicou ${cliques} vezes`;
}
