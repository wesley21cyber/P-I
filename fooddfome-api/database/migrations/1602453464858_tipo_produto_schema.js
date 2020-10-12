'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoProdutoSchema extends Schema {
  up () {
    this.create('tipo_produtos', (table) => {
      table.increments()
      table.string('descricao', 50).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_produtos')
  }
}

module.exports = TipoProdutoSchema
