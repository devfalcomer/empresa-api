'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Setore extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:10',
      empresa_id: 'required|max:3|min:1'
    }
  }
}

module.exports = Setore
