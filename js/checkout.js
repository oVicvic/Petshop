const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
const container = document.getElementById('carrinho-itens');
const totalSpan = document.getElementById('total-preco');

function renderizarCarrinho() {
  container.innerHTML = '';
  let total = 0;

  if (carrinhoItens.length === 0) {
    container.innerHTML = '<p>Seu carrinho está vazio.</p>';
    totalSpan.innerText = '0.00';
    return;
  }

  carrinhoItens.forEach((item, index) => {
    total += item.preco;
    const div = document.createElement('div');
    div.className = 'produto-card';
    div.innerHTML = `
      <h4>${item.nome}</h4>
      <p>Preço: R$ ${item.preco.toFixed(2)}</p>
      <button onclick="removerItem(${index})">Remover</button>
    `;
    container.appendChild(div);
  });

  totalSpan.innerText = total.toFixed(2);
}

function removerItem(index) {
  carrinhoItens.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
  renderizarCarrinho();
}

document.getElementById('btn-finalizar').addEventListener('click', () => {
  alert('Compra finalizada com sucesso!');
  localStorage.removeItem('carrinho');
  window.location.href = 'produtos.html';
});

renderizarCarrinho();
