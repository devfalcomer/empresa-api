'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FornecedoresEmpresa extends Model {
    static getFornecedoresEmpresa() {
        return [
            'empresa_id',
            'fornecedore_id'
        ]
    }
}

module.exports = FornecedoresEmpresa
