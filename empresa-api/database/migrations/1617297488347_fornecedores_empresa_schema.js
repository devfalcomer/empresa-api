'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedoresEmpresaSchema extends Schema {
  up () {
    this.create('fornecedores_empresas', (table) => {
      table.increments()
      table.integer('empresa_id').references('id').inTable('empresas').unsigned().notNullable()
      table.integer('fornecedore_id').references('id').inTable('fornecedores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedores_empresas')
  }
}

module.exports = FornecedoresEmpresaSchema
