'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionarioSchema extends Schema {
  up() {
    this.create('funcionarios', (table) => {
      table.increments()
      table.string('nome', 50).notNullable()
      table.bigInteger('cpf')
      table.decimal('salario').notNullable()
      table.integer('carga_horaria').notNullable()
      table.integer('empresa_id').references('id').inTable('empresas').unsigned().notNullable()
      table.integer('funcoe_id').references('id').inTable('funcoes').unsigned().notNullable()
      table.integer('setore_id').references('id').inTable('setores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('funcionarios')
  }
}

module.exports = FuncionarioSchema
