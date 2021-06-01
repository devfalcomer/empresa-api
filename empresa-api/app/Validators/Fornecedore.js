'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Fornecedore extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:10',
      descricao: 'required|max:100',
      cnpj: 'max:18|min:14',
      contato: 'required|max:10|min:4',
      responsavel: 'required|max:10'
    }
  }
}

module.exports = Fornecedore
