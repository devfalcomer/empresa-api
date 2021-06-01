'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedoreSchema extends Schema {
  up () {
    this.create('fornecedores', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.string('descricao', 100).notNullable()
      table.string('cnpj', 18)
      table.string('contato', 30).notNullable()
      table.string('responsavel', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedores')
  }
}

module.exports = FornecedoreSchema
