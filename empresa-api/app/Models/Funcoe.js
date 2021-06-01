'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcoe extends Model {
    static getCamposFuncoe() {
        return [
            'nome',
            'setore_id'
        ]
    }

    setor() {
        return this.belongsTo('App/models/Setore')
    }

    funcionarios() {
        return this.hasMany('App/models/Funcionario')
    }
}

module.exports = Funcoe
