'use strict'

const Setor = use('App/models/Setore')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with setores
 */
class SetoreController {
  /**
   * Show a list of all setores.
   * GET setores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Setor.query().fetch();
  }

  /**
   * Create/save a new setore.
   * POST setores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Setor.getCamposSetor()
    const setores = request.only(campos)

    return await Setor.create(setores)
  }

  /**
   * Display a single setore.
   * GET setores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Setor.query()
      .with('funcoes')
      .with('empresas')
      .where('id', params.id)
      .first()
  }

  /**
   * Update setore details.
   * PUT or PATCH setores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const setores = await Setor.findOrFail(params.id);

    const campos = Funcoe.getCamposSetor()
    const dados = request.only(campos)

    setores.merge(dados)
    await setores.save()

    return setores
  }

  /**
   * Delete a setore with id.
   * DELETE setores/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const setores = await Setor.findOrFail(params.id);
    return await setores.delete();
  }
}

module.exports = SetoreController
