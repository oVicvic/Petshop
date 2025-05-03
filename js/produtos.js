const produtos = [
    { id: 1, nome: "Ração Premium", preco: 89.90, imagem: "img/racoes-premium-especiais.jpg" },
    { id: 2, nome: "Brinquedo Mordedor", preco: 19.90, imagem: "img/mordedor.jpg" },
    { id: 3, nome: "Coleira Estilosa", preco: 29.90, imagem: "img/coleira.jpg" }
  ];
  
  function carregarProdutos() {
    const container = document.getElementById('produtos-lista');
    produtos.forEach(produto => {
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h4>${produto.nome}</h4>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
      `;
      container.appendChild(card);
    });
  }
  
  function adicionarAoCarrinho(id) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produtos.find(p => p.id === id));
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
  }
  
  function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    document.getElementById('cart-count').innerText = carrinho.length;
  }
  
  carregarProdutos();
  atualizarContadorCarrinho();
  