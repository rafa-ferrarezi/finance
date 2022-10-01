class Lancamento {
  constructor(descricao, categoria, tipo, valor) {
    if (tipo !== 'receita' && tipo !== 'despesa') {
      throw new Error('Lançamento Inválido: Tipo deve ser receita ou despesa')
    }
    if (valor <= 0) {
      throw new Error('Lançamento Inválido: Valor deve ser maior que zero')
    }
    if (categoria === '') {
      throw new Error('Lançamento Inválido: A Categoria é obrigatória')
    }
    if (descricao === '') {
      throw new Error('Lançamento Inválido: A Descricao é obrigatória')
    }
    this.descricao = descricao
    this.categoria = categoria
    this.tipo = tipo
    this.valor = valor
  }

  getValorString() {
    // operador ternario
    return this.tipo === 'despesa' ? this.valor * -1 : this.valor
  }
}
