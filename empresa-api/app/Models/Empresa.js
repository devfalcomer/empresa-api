'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empresa extends Model {
    static getCamposEmpresas() {
        return [
            'nome',
            'cnpj',
            'responsavel'
        ]
    }

    setores() {
        return this.belongsTo('App/models/Setore')
    }

    funcionarios() {
        return this.hasMany('App/models/Funcionario')
    }

    fornecedoresEmpresa() {
        return this.belongsToMany('App/models/Fornecedore').pivotTable('fornecedores_empresas')
    }

}

module.exports = Empresa
