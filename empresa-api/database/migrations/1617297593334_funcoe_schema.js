'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncoeSchema extends Schema {
  up () {
    this.create('funcoes', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.integer('setore_id').references('id').inTable('setores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('funcoes')
  }
}

module.exports = FuncoeSchema
