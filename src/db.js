const mysql = require('promise-mysql')
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

const getConnection = () => connection

module.exports = {
  getConnection
}
