const pgp = require('pg-promise')

class Connection {
  constructor() {
    this.connection = pgp()('postgres://postgres:123@localhost:5432/financas')
  }

  query(statement, params) {
    return this.connection.query(statement, params)
  }
}

module.exports = Connection
