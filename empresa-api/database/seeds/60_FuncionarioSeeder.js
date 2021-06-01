'use strict'

/*
|--------------------------------------------------------------------------
| FuncionarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Funcionario = use('App/models/Funcionario')

class FuncionarioSeeder {
  async run() {
    await Funcionario.createMany([
      {
        nome: 'Deltrano',
        cpf: '',
        salario: 'R$ 20.000,00',
        carga_horaria: '20 horas',
        empresa_id: '3',
        funcoe_id: '2',
        setore_id: '2'
      },
      {
        nome: 'Ciclano',
        cpf: '',
        salario: 'R$ 15.000,00',
        carga_horaria: ' 15 horas',
        empresa_id: '1',
        funcoe_id: '1',
        setore_id: '2'
      },
      {
        nome: 'Fulano',
        cpf: '',
        salario: 'R$ 30.000,00',
        carga_horaria: '30 horas',
        empresa_id: '2',
        funcoe_id: '3',
        setore_id: '1'
      }
    ])
  }
}

module.exports = FuncionarioSeeder
