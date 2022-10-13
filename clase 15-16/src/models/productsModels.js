import { db_SQL } from '../db/dbConfig.js'
;(async function () {
  try {
    // preguntar si tabla existe
    const isTable = await db_SQL.schema.hasTable('products')
    // creando tabla
    if (!isTable) {
      await _db_SQL.schema.createTable('products', (table) => {
        //agregando columnas
        table.increments('id').primary().notNullable()
        table.string('name').notNullable()
        table.integer('price').notNullable()
        table.integer('stock').notNullable()
      })
    }
    console.log('tabla creada con exito')
  } catch (error) {
    console.log(error)
  }
})()