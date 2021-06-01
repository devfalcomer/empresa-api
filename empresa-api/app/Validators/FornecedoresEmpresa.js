'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class FornecedoresEmpresa extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      empresa_id: 'required|max:3',
      fornecedore_id: 'required|max:3'
    }
  }
}

module.exports = FornecedoresEmpresa
