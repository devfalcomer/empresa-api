'use strict'

/*
|--------------------------------------------------------------------------
| FuncoeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Funcoe = use('App/models/Funcoe')

class FuncoeSeeder {
  async run() {
    await Funcoe.createMany([
      { nome: 'Web Designer', setore_id: 2 },
      { nome: 'Desenvolvedor', setore_id: 1 },
      { nome: 'Gerente', setore_id: 3 }
    ])
  }
}

module.exports = FuncoeSeeder
