// === FUNÇÃO DE FAVORITAR ===
const botoes = document.querySelectorAll('.favoritar');

botoes.forEach(btn => {
  const icone = btn.querySelector('i');

  btn.addEventListener('click', () => {
    if (icone.classList.contains('bi-heart')) {
      icone.classList.replace('bi-heart', 'bi-heart-fill');
    } else {
      icone.classList.replace('bi-heart-fill', 'bi-heart');
    }
  });
});

// === FUNÇÃO DE PESQUISA ===
const inputBusca = document.querySelector('.input-buscar input');
const filmes = document.querySelectorAll('.filme');
const mensagemErro = document.getElementById('mensagemErro');

inputBusca.addEventListener('input', () => {
  const texto = inputBusca.value.toLowerCase().trim();
  let encontrou = false;

  filmes.forEach(filme => {
    const titulo = filme.querySelector('.titulo').textContent.toLowerCase();

    if (titulo.includes(texto)) {
      filme.style.display = 'flex';
      encontrou = true;
    } else {
      filme.style.display = 'none';
    }
  });

  // Mostra ou esconde a mensagem
  if (!encontrou && texto !== "") {
    mensagemErro.style.display = 'block';
  } else {
    mensagemErro.style.display = 'none';
  }

  // Se o campo estiver vazio, mostra todos os filmes
  if (texto === "") {
    filmes.forEach(filme => filme.style.display = 'flex');
  }
});