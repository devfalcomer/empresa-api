'use strict'

const Empresa = use('App/models/Empresa')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with empresas
 */
class EmpresaController {
  /**
   * Show a list of all empresas.
   * GET empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request }) {
    const { page, perPage } = request.all()
    return Empresa.query().paginate(page, perPage);
  }

  /**
   * Create/save a new empresa.
   * POST empresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request }) {
    const campos = Empresa.getCamposEmpresas()
    const empresas = request.only(campos)
    return await Empresa.create(empresas)
  }

  /**
   * Display a single empresa.
   * GET empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Empresa.query()
      .with('setores')
      .with('funcionarios')
      .with('fornecedoresEmpresa')
      .where('id', params.id)
      .first()
  }

  /**
   * Update empresa details.
   * PUT or PATCH empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id);

    const campos = Empresa.getCamposEmpresa()
    const dados = request.only(campos)

    empresa.merge(dados)
    await empresa.save()

    return empresa
  }

  /**
   * Delete a empresa with id.
   * DELETE empresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const empresa = await Empresa.findOrFail(params.id);
    return await empresa.delete();
  }
}

module.exports = EmpresaController
