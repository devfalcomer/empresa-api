'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.get('/', () => {
//return { greeting: 'Hello world in JSON' }
//})

/*
Route.get('/empresas', 'EmpresaController.index')
Route.get('/fornecedores', 'FornecedoreController.index')
Route.get('/fornecedoresEmpresa', 'FornecedoresEmpresaController.index')
Route.get('/funcionarios', 'FuncionarioController.index')
Route.get('/funcoes', 'FuncoeController.index')
Route.get('/setores', 'SetoreController.index')
*/

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(() => {
  Route.resource('/empresas', "EmpresaController")
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Empresa']
    ]))
  Route.resource('/fornecedores', "FornecedoreController")
    .apiOnly()
    .validator(new Map([
      [['store', 'uptade'], 'Fornecedore']
    ]))
  Route.resource('/fornecedoresEmpresa', "FornecedoresEmpresaController")
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'FornecedoresEmpresa']
    ]))
  Route.resource('/funcionarios', "FuncionarioController")
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Funcionario']
    ]))
  Route.resource('/funcoes', "FuncoeController")
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Funcoe']
    ]))
  Route.resource('/setores', "SetoreController")
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Setore']
    ]))
}).middleware('auth')
