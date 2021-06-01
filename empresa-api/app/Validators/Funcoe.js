'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Funcoe extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:10',
      setore_id: 'required|max:3'
    }
  }
}

module.exports = Funcoe
