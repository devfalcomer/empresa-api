'use strict'

const { makePivotTableName } = require('@adonisjs/lucid/lib/util')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedore extends Model {
    static getCamposFornecedor() {
        return [
            'nome',
            'descricao',
            'cnpj',
            'contato',
            'responsavel'
        ]
    }

    fornecedoresEmpresa() {
        return this.belongsToMany('App/models/Fornecedore').pivotTable('fornecedores_empresas')
    }
}

module.exports = Fornecedore
