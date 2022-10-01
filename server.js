const express = require('express')
const app = express()
app.use(express.json())
app.use('/', express.static('./client'))

const lancamentos = [
  {
    mes: 'janeiro',
    descricao: 'test',
    categoria: 'Salário',
    tipo: 'receita',
    valor: 4000
  },
  {
    mes: 'janeiro',
    descricao: 'test',
    categoria: 'Aluguel',
    tipo: 'despesa',
    valor: 1000
  },
  {
    mes: 'janeiro',
    descricao: 'test',
    categoria: 'Conta de Luz',
    tipo: 'despesa',
    valor: 200
  },
  {
    mes: 'janeiro',
    descricao: 'test',
    categoria: 'Conta de Água',
    tipo: 'despesa',
    valor: 100
  },
  {
    mes: 'janeiro',
    descricao: 'test',
    categoria: 'Internet',
    tipo: 'despesa',
    valor: 100
  },
  {
    mes: 'fevereiro',
    descricao: 'test',
    categoria: 'Salário',
    tipo: 'receita',
    valor: 3000
  },
  {
    mes: 'fevereiro',
    descricao: 'test',
    categoria: 'Aluguel',
    tipo: 'despesa',
    valor: 1200
  },
  {
    mes: 'fevereiro',
    descricao: 'test',
    categoria: 'Conta de Luz',
    tipo: 'despesa',
    valor: 250
  },
  {
    mes: 'fevereiro',
    descricao: 'test',
    categoria: 'Conta de Água',
    tipo: 'despesa',
    valor: 100
  },
  {
    mes: 'fevereiro',
    descricao: 'test',
    categoria: 'Internet',
    tipo: 'despesa',
    valor: 100
  },
  {
    mes: 'marco',
    descricao: 'test',
    categoria: 'Salário',
    tipo: 'receita',
    valor: 4000
  },
  {
    mes: 'marco',
    descricao: 'test',
    categoria: 'Aluguel',
    tipo: 'despesa',
    valor: 1200
  },
  {
    mes: 'marco',
    descricao: 'test',
    categoria: 'Conta de Luz',
    tipo: 'despesa',
    valor: 200
  },
  {
    mes: 'marco',
    descricao: 'test',
    categoria: 'Conta de Água',
    tipo: 'despesa',
    valor: 100
  },
  {
    mes: 'marco',
    descricao: 'test',
    categoria: 'Internet',
    tipo: 'despesa',
    valor: 200
  },
  {
    mes: 'abril',
    descricao: 'test',
    categoria: 'Salário',
    tipo: 'receita',
    valor: 4000
  }
]

app.get('/api/lancamentos', function (req, res) {
  res.json(lancamentos)
})
app.post('/api/lancamentos', function (req, res) {
  const lancamento = req.body
  lancamentos.push(lancamento)
  res.end()
})

app.listen(3000)
