const express = require('express')
const app = express()
var methodOverride = require('method-override')
var cors = require('cors')
const con = require('./config/db.js')
const ClientRouter = require('./routes/clientRouter')

const http = require('http').Server(app)

const PORT = process.env.PORT || 1995

// DATABASE CONNECT
app.use((req, _, next) => {
  req.con = con
  next()
})


// BODY REQUEST PARSE
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(methodOverride('_method'))

// ACCESS DOMAINS
app.use(cors({
  allowedOrigins: [
    'localhost', '*', 'http://localhost'
  ]
}))

// DECLARE ROUTES
app.use('/client', ClientRouter)

http.listen(PORT, () => {
  console.info(`<<<<<<<<<<<< ✔ RIPLEY CHALLENGE SERVER EXECUTING ON PORT:  ${http._connectionKey} ✔ >>>>>>>>>>`)
})