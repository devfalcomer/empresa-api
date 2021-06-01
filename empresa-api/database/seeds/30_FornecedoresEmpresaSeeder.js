'use strict'

/*
|--------------------------------------------------------------------------
| FornecedoresEmpresaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const FornecedoresEmpresa = use('App/models/FornecedoresEmpresa')

class FornecedoresEmpresaSeeder {
  async run() {
    await FornecedoresEmpresa.createMany([
      { empresa_id: 1, fornecedore_id: 2 },
      { empresa_id: 2, fornecedore_id: 1 },
      { empresa_id: 3, fornecedore_id: 1 }
    ])
  }
}

module.exports = FornecedoresEmpresaSeeder
