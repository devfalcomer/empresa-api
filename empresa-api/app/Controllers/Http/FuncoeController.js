'use strict'

const Funcoe = use('App/models/Funcoe')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with funcoes
 */
class FuncoeController {
  /**
   * Show a list of all funcoes.
   * GET funcoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Funcoe.query().fetch();
  }

  /**
   * Create/save a new funcoe.
   * POST funcoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Funcoe.getCamposFuncoe()
    const funcoes = request.only(campos)

    return await Funcoe.create(funcoes)
  }

  /**
   * Display a single funcoe.
   * GET funcoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Funcoe.query()
      .with('setor')
      .with('funcionarios')
      .where('id', params.id)
      .first()
  }

  /**
   * Update funcoe details.
   * PUT or PATCH funcoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const funcoes = await Funcoe.findOrFail(params.id);

    const campos = Funcoe.getCamposFuncoe()
    const dados = request.only(campos)

    funcoes.merge(dados)
    await funcoes.save()

    return funcoes
  }

  /**
   * Delete a funcoe with id.
   * DELETE funcoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const funcoes = await Funcoe.findOrFail(params.id);
    return await funcoes.delete();
  }
}

module.exports = FuncoeController
