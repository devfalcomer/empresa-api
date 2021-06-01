'use strict'

const Fornecedore = use('App/models/Fornecedore')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fornecedores
 */
class FornecedoreController {
  /**
   * Show a list of all fornecedores.
   * GET fornecedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Fornecedore.query().fetch();
  }

  /**
   * Create/save a new fornecedore.
   * POST fornecedores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Fornecedore.getCamposFornecedor()
    const fornecedores = request.only(campos)
    return await Fornecedore.create(fornecedores)
  }

  /**
   * Display a single fornecedore.
   * GET fornecedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Fornecedore.query()
      .with('fornecedoresEmpresa')
      .where('id', params.id)
      .first()
  }

  /**
   * Update fornecedore details.
   * PUT or PATCH fornecedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const fornecedor = await Fornecedore.findOrFail(params.id);

    const campos = Fornecedore.getCamposFornecedor()
    const dados = request.only(campos)

    fornecedor.merge(dados)
    await fornecedor.save()

    return fornecedor
  }

  /**
   * Delete a fornecedore with id.
   * DELETE fornecedores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const fornecedores = await Fornecedore.findOrFail(params.id);
    return await fornecedores.delete();
  }
}

module.exports = FornecedoreController
