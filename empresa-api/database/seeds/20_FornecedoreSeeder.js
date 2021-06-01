'use strict'

/*
|--------------------------------------------------------------------------
| FornecedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Fornecedore = use('App/models/Fornecedore')

class FornecedoreSeeder {
  async run() {
    await Fornecedore.createMany([
      {
        nome: 'Delicia',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus eros id risus venenatis, eget semper risus tempor. Duis non maximus metus. Nullam vel lorem in neque bibendum auctor id a est. Donec placerat neque ante, eget rhoncus felis auctor accumsan. Quisque in tristique erat, et maximus elit.',
        cnpj: '44.234.372/0001-58',
        contato: '6178569043',
        responsavel: 'Victor Jóse'
      },

      {
        nome: 'All Day',
        descricao: 'Suspendisse eget gravida tellus. Phasellus eu libero pharetra enim tempor dictum. Cras et fermentum metus. In dapibus auctor ultrices. Pellentesque nec efficitur elit. Aenean lectus ante, porta non neque in, aliquam pulvinar massa. Nunc felis tortor, euismod sed pharetra et, viverra sit amet nulla.',
        cnpj: '42.248.316/0001-47',
        contato: '6187658943',
        responsavel: 'Natan Farias'
      },

      {
        nome: 'Cajamar',
        descricao: 'Vivamus eu dapibus odio. Vivamus posuere accumsan mauris, sed aliquam purus. Nunc non varius nulla. Nullam ultricies augue eget nibh vulputate pretium. Donec at commodo est, et convallis ipsum.',
        cnpj: '42.012.380/0001-24',
        contato: '6133458976',
        responsavel: 'Arthur Falcomer'
      }
    ])
  }
}

module.exports = FornecedoreSeeder
