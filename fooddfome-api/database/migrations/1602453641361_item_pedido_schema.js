'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemPedidoSchema extends Schema {
  up () {
    this.create('item_pedidos', (table) => {
      table.increments()
      table.string('descricao', 50).notNullable()
      table.integer('quantidade', 5).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('item_pedidos')
  }
}

module.exports = ItemPedidoSchema
