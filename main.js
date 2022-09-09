const janeiro = new Mes('janeiro')
janeiro.adicionarLancamento(
  new Lancamento('Salario', 'Salário', 'receita', 5000)
)
janeiro.adicionarLancamento(new Lancamento('Casa', 'Aluguel', 'despesa', 1000))
janeiro.adicionarLancamento(
  new Lancamento('Casa', 'Conta de Luz', 'despesa', 200)
)
janeiro.adicionarLancamento(
  new Lancamento('Casa', 'Conta de Água', 'despesa', 100)
)
janeiro.adicionarLancamento(new Lancamento('Casa', 'Internet', 'despesa', 100))
janeiro.adicionarLancamento(
  new Lancamento('Transporte', 'Transporte', 'despesa', 300)
)
janeiro.adicionarLancamento(new Lancamento('Lazer', 'Lazer', 'despesa', 300))
janeiro.adicionarLancamento(
  new Lancamento('Alimentacao', 'Alimentação', 'despesa', 500)
)
janeiro.adicionarLancamento(
  new Lancamento('Casa', 'Condomínio', 'despesa', 300)
)
janeiro.adicionarLancamento(new Lancamento('Saude', 'Farmácia', 'despesa', 100))
janeiro.calcularSaldo()
console.log(janeiro)

const fevereiro = new Mes('fevereiro')
fevereiro.adicionarLancamento(
  new Lancamento('Salario', 'Salário', 'receita', 3000)
)
fevereiro.adicionarLancamento(
  new Lancamento('Casa', 'Aluguel', 'despesa', 1000)
)
fevereiro.adicionarLancamento(
  new Lancamento('Casa', 'Conta de Luz', 'despesa', 200)
)
fevereiro.adicionarLancamento(
  new Lancamento('Casa', 'Conta de Água', 'despesa', 100)
)
fevereiro.adicionarLancamento(
  new Lancamento('Casa', 'Internet', 'despesa', 100)
)
fevereiro.adicionarLancamento(
  new Lancamento('Transporte', 'Transporte', 'despesa', 300)
)
fevereiro.adicionarLancamento(new Lancamento('Lazer', 'Lazer', 'despesa', 300))
fevereiro.adicionarLancamento(
  new Lancamento('Alimentacao', 'Alimentação', 'despesa', 500)
)
fevereiro.adicionarLancamento(
  new Lancamento('Casa', 'Condomínio', 'despesa', 300)
)
fevereiro.adicionarLancamento(
  new Lancamento('Saude', 'Farmácia', 'despesa', 100)
)
fevereiro.calcularSaldo()
console.log(fevereiro)

const marco = new Mes('marco')
marco.adicionarLancamento(new Lancamento('Salario', 'Salário', 'receita', 3000))
marco.adicionarLancamento(new Lancamento('Casa', 'Aluguel', 'despesa', 1000))
marco.adicionarLancamento(
  new Lancamento('Casa', 'Conta de Luz', 'despesa', 200)
)
marco.adicionarLancamento(
  new Lancamento('Casa', 'Conta de Água', 'despesa', 100)
)
marco.adicionarLancamento(new Lancamento('Casa', 'Internet', 'despesa', 100))
marco.adicionarLancamento(
  new Lancamento('Transporte', 'Transporte', 'despesa', 300)
)
marco.adicionarLancamento(new Lancamento('Lazer', 'Lazer', 'despesa', 300))
marco.adicionarLancamento(
  new Lancamento('Alimentacao', 'Alimentação', 'despesa', 500)
)
marco.adicionarLancamento(new Lancamento('Casa', 'Condomínio', 'despesa', 300))
marco.adicionarLancamento(new Lancamento('Saude', 'Farmácia', 'despesa', 100))

const abril = new Mes('abril')
abril.adicionarLancamento(new Lancamento('Salário', 'Salario', 'receita', 3000))
abril.adicionarLancamento(new Lancamento('aluguel', 'aluguel', 'despesa', 1500))
abril.adicionarLancamento(
  new Lancamento('transporte', 'transporte', 'despesa', 1200)
)

const ano = new Ano()
ano.adicionarMes(janeiro)
ano.adicionarMes(fevereiro)
ano.adicionarMes(marco)
ano.adicionarMes(abril)
ano.calcularSaldo()

janeiro.adicionarLancamento(new Lancamento('Escola', 'Escola', 'despesa', 500))
fevereiro.adicionarLancamento(
  new Lancamento('Escola', 'Escola', 'despesa', 400)
)
marco.adicionarLancamento(new Lancamento('Escola', 'Escola', 'despesa', 500))
ano.calcularSaldo()

console.log(ano.meses)

function addElement(parent, elementType, text) {
  const element = document.createElement(elementType)
  if (text !== '' && text !== undefined && text !== null) {
    element.innerText = text
  }
  parent.appendChild(element)
}

function renderizar() {
  const app = document.getElementById('app')
  if (app.firstChild) {
    app.firstChild.remove()
  }
  const painel = document.createElement('div')
  const cores = ['red', 'yellow', 'green', 'blue']
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  for (const mes of ano.meses) {
    const coluna = document.createElement('div')
    coluna.className = 'grafico-coluna'
    const cor = document.createElement('div')
    cor.style.height = (mes.totalizador.saldo * 100) / 1000 + 'px'
    cor.style.background = cores.pop()
    coluna.appendChild(cor)
    const nomeDoMes = document.createElement('div')
    nomeDoMes.className = 'grafico-coluna-texto'
    nomeDoMes.innerText = mes.nome
    coluna.appendChild(cor)
    coluna.appendChild(nomeDoMes)
    grafico.appendChild(coluna)
  }
  painel.appendChild(grafico)

  for (const mes of ano.meses) {
    addElement(painel, 'h4', mes.nome)
    const tabelaLancamentos = document.createElement('table')
    tabelaLancamentos.className = 'tabela-lancamentos'
    const linhaTitulo = document.createElement('tr')
    addElement(linhaTitulo, 'th', 'Descricao')
    addElement(linhaTitulo, 'th', 'Categoria')
    addElement(linhaTitulo, 'th', 'Valor')
    tabelaLancamentos.appendChild(linhaTitulo)
    for (const lancamento of mes.lancamentos) {
      const linhaLancamento = document.createElement('tr')
      addElement(linhaLancamento, 'td', lancamento.descricao)
      addElement(linhaLancamento, 'td', lancamento.categoria)
      addElement(linhaLancamento, 'td', formatarDinheiro(lancamento.valor))
      tabelaLancamentos.appendChild(linhaLancamento)
    }
    const linhaJuros = document.createElement('tr')
    addElement(linhaJuros, 'th', 'Juros')
    addElement(linhaJuros, 'th', formatarDinheiro(mes.totalizador.juros))
    tabelaLancamentos.appendChild(linhaJuros)
    const linhaRendimentos = document.createElement('tr')
    addElement(linhaRendimentos, 'th', 'Rendimentos')
    addElement(
      linhaRendimentos,
      'th',
      formatarDinheiro(mes.totalizador.rendimentos)
    )
    tabelaLancamentos.appendChild(linhaRendimentos)
    const linhaSaldo = document.createElement('tr')
    addElement(linhaSaldo, 'th', 'Total')
    addElement(linhaSaldo, 'th', formatarDinheiro(mes.totalizador.saldo))
    tabelaLancamentos.appendChild(linhaSaldo)
    painel.appendChild(tabelaLancamentos)
  }
  app.appendChild(painel)
}

renderizar()

function adicionarLancamento() {
  const mes = document.getElementById('mes')
  const descricao = document.getElementById('descricao')
  const categoria = document.getElementById('categoria')
  const tipo = document.getElementById('tipo')
  const valor = document.getElementById('valor')
  ano.adicionarLancamento(
    mes.value,
    new Lancamento(
      descricao.value,
      categoria.value,
      tipo.value,
      parseFloat(valor.value)
    )
  )
  ano.calcularSaldo()
  renderizar()
  mes.value = ano.meses[0].nome
  tipo.value = 'receita'
  descricao.value = ''
  categoria.value = ''
  valor.value = ''
}

const botao = document.getElementById('botao')
botao.addEventListener('click', adicionarLancamento)

const mesSelect = document.getElementById('mes')
for (const mes of ano.meses) {
  const option = document.createElement('option')
  option.text = mes.nome
  mesSelect.add(option)
}
