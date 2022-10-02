const Connection = require('./server/Connection')
const HttpServer = require('./server/HttpServer')
const LancamentoController = require('./server/LancamentoController')
const LancamentoData = require('./server/LancamnetoData')

const connection = new Connection()
const lancamentoData = new LancamentoData(connection)
const httpServer = new HttpServer()
const lancamentoController = new LancamentoController(
  httpServer,
  lancamentoData
)
httpServer.listen(3000)
