'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Funcionario extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required',
      cpf: 'integer|max:14|min:11',
      salario: 'required|max:6',
      carga_horaria: 'required|max:2',
      empresa_id: 'required|max:3',
      funcoe_id: 'required|max:3',
      setore_id: 'required|max:3'
    }
  }
}

module.exports = Funcionario
