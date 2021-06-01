'use strict'

/*
|--------------------------------------------------------------------------
| SetorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Setor = use('App/models/Setore')

class SetorSeeder {
  async run() {
    await Setor.createMany([
      { nome: 'RH', empresa_id: 3 },
      { nome: 'Administrativo', empresa_id: 1 },
      { nome: 'Financeiro', empresa_id: 2 }
    ])
  }
}

module.exports = SetorSeeder
