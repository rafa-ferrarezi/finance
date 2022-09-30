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

class Select {
  constructor(id) {
    this.element = document.createElement('select')
    this.element.id = id
  }
  addOption(text) {
    const option = document.createElement('option')
    option.text = text
    this.element.appendChild(option)
  }
}

class Input {
  constructor(id, type, placeholder) {
    this.element = document.createElement('input')
    this.element.id = id
    this.element.type = type
    this.element.placeholder = placeholder
  }
}

class Button {
  constructor(id, text) {
    this.element = document.createElement('button')
    this.element.id = id
    this.element.innerText = text
  }
  addListener(fn) {
    this.element.addEventListener('click', fn)
  }
}

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

function renderizar() {
  const app = document.getElementById('app')
  if (app.firstChild) {
    app.firstChild.remove()
  }
  const painel = new Div()
  const titulo = new h4('Finanças Pessoais')
  painel.adicionarElementoFilho(titulo.element)
  const form = new Div('form-lancamento')
  const mesSelect = new Select('mes')
  for (const mes of ano.meses) {
    mesSelect.addOption(mes.nome)
  }

  const tipoSelect = new Select('tipo')
  tipoSelect.addOption('receita')
  tipoSelect.addOption('despesa')
  const descricaoInputText = new Input('descricao', 'text', 'Descrição')
  const categoriaInputText = new Input('categoria', 'text', 'Categoria')
  const valorInputText = new Input('valor', 'number', 'Valor')
  const adicionarButton = new Button('botao', 'Adicionar')
  adicionarButton.addListener(() => {
    adicionarLancamento()
  })
  form.adicionarElementoFilho(mesSelect.element)
  form.adicionarElementoFilho(tipoSelect.element)
  form.adicionarElementoFilho(descricaoInputText.element)
  form.adicionarElementoFilho(categoriaInputText.element)
  form.adicionarElementoFilho(valorInputText.element)
  form.adicionarElementoFilho(adicionarButton.element)
  painel.adicionarElementoFilho(form.element)

  const grafico = new Grafico()
  for (const mes of ano.meses) {
    grafico.adicionarColuna(mes.totalizador.saldo, mes.nome)
  }
  painel.adicionarElementoFilho(grafico.element)

  for (const mes of ano.meses) {
    const nomeDoMes = new h4(mes.nome)
    painel.adicionarElementoFilho(nomeDoMes.element)

    const tabelaLancamentos = new Tabela('tabela-lancamentos')
    tabelaLancamentos.addRow('th', ['Descrição', 'Categoria', 'Valor'])

    for (const lancamento of mes.lancamentos) {
      tabelaLancamentos.addRow('td', [
        lancamento.descricao,
        lancamento.categoria,
        formatarDinheiro(lancamento.getValorString())
      ])
    }
    tabelaLancamentos.addRow('th', [
      'Juros',
      formatarDinheiro(mes.totalizador.juros)
    ])
    tabelaLancamentos.addRow('th', [
      'Rendimentos',
      formatarDinheiro(mes.totalizador.rendimentos)
    ])
    tabelaLancamentos.addRow('th', [
      'Total',
      formatarDinheiro(mes.totalizador.saldo)
    ])

    painel.adicionarElementoFilho(tabelaLancamentos.element)
  }
  app.appendChild(painel.element)
}

renderizar()
