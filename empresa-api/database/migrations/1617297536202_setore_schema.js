'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetoreSchema extends Schema {
  up () {
    this.create('setores', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.integer('empresa_id').references('id').inTable('empresas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('setores')
  }
}

module.exports = SetoreSchema
