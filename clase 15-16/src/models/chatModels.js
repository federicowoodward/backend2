import { db_SL3 } from "../db/dbConfig.js";

(async function () {
  try {
    const isTable = await db_SL3.schema.hasTable("chat");
    if (!isTable) {
      await db_SL3.schema.createTable("chat", (table) => {
        table.increments("id").primary().notNullable();
        table.string("email").notNullable();
        table.string("timestamp").notNullable();
        table.string("message").notNullable();
      });
      console.log("Tabla Chat creada con exito");
    }
  } catch (error) {
    console.log("Error:", error);
  }
})();