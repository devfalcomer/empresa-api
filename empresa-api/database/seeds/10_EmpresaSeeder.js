'use strict'

/*
|--------------------------------------------------------------------------
| EmpresaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Empresa = use('App/models/Empresa')

class EmpresaSeeder {
  async run() {
    await Empresa.createMany([
      {
        nome: 'Aurora Alimentos',
        cnpj: '00.067.906/0001-23',
        responsavel: 'Sr. Aury Luis Bodanese '
      },

      {
        nome: 'Bungue',
        cnpj: '20.809.687/0001-18',
        responsavel: 'Johannpeter G. Bunge'
      },

      {
        nome: 'Microsoft',
        cnpj: '22.035.002/0001-59',
        responsavel: 'Bill Gates'
      }
    ])
  }
}

module.exports = EmpresaSeeder
