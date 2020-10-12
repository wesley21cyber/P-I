'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IngredienteSchema extends Schema {
  up () {
    this.create('ingredientes', (table) => {
      table.increments()
      table.string('descricao', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ingredientes')
  }
}

module.exports = IngredienteSchema
