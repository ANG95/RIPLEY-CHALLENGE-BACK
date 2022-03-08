const express = require('express')
const router = express.Router() 
const Client = require('../controller/clientController')

router.get('/', Client.listClients)
router.post('/add', Client.addClient)

module.exports = router
