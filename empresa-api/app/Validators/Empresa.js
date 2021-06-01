'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Empresa extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:10',
      cnpj: 'required|max:18|min:14',
      responsalvel: 'max:10'
    }
  }
}

module.exports = Empresa
