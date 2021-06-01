'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcionario extends Model {
    static getCamposFuncionario() {
        return [
            'nome',
            'cpf',
            'salario',
            'carga_horaria',
            'empresa_id',
            'funcoe_id',
            'setore_id'
        ]
    }

    empresas() {
        return this.belongsTo('App/models/Empresa')
    }

    funcoes() {
        return this.belongsTo('App/models/Funcoe')
    }
}

module.exports = Funcionario
