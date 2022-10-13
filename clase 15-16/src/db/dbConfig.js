import knex from "knex";

// config sql

const configMySQL = {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: `root`,
        password: `123456789`,
        database: `knex_mysql`,
    },
}

//  config sqlite

const configSqlite3 = {
    client: `sqlite3`,
    connection: {
        filename: `./db/knex_sqlite`
    },
    useNullAsDefault: true,
}

export const db_SQL = knex(configMySQL)
export const db_SL3 = knex(configSqlite3)