'use strict'

const FornecedoresEmpresa = use('App/models/FornecedoresEmpresa')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fornecedoresempresas
 */
class FornecedoresEmpresaController {
  /**
   * Show a list of all fornecedoresempresas.
   * GET fornecedoresempresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return FornecedoresEmpresa.query().fetch();
  }

  /**
   * Create/save a new fornecedoresempresa.
   * POST fornecedoresempresas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = FornecedoresEmpresa.getFornecedoresEmpresa()
    const fornecedoresempresas = request.only(campos)

    return await FornecedoresEmpresa.create(fornecedoresempresas)
  }

  /**
   * Display a single fornecedoresempresa.
   * GET fornecedoresempresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await FornecedoresEmpresa.findOrFail(params.id);
  }

  /**
   * Update fornecedoresempresa details.
   * PUT or PATCH fornecedoresempresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const fornecedoresempresa = await FornecedoresEmpresa.findOrFail(params.id);

    const campos = FornecedoresEmpresa.getFornecedoresEmpresa()
    const dados = request.only(campos)

    fornecedoresempresa.merge(dados)
    await fornecedoresempresa.save()

    return fornecedoresempresa
  }

  /**
   * Delete a fornecedoresempresa with id.
   * DELETE fornecedoresempresas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const fornecedoresempresa = await FornecedoresEmpresa.findOrFail(params.id);
    return await fornecedoresempresa.delete();
  }
}

module.exports = FornecedoresEmpresaController
