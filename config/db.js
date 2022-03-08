const mysql = require('mysql')
const util = require('util')
require('dotenv').config()

const conDB = mysql.createPool({
  host: process.env.DB_R_HOST,
  user: process.env.DB_R_USER,
  password: process.env.DB_R_PASS,
  database: process.env.DB_R_NAME,
  port: process.env.DB_R_PORT,
  multipleStatements: true
})

conDB.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('The database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('The database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('The connection to the database was refused. ❕❕⚠ PLEASE TURN ON DATABASE SERVICE ❕❕⚠')
    }
  }
  if (connection) connection.release()
  return
})
conDB.query = util.promisify(conDB.query)

module.exports = conDB