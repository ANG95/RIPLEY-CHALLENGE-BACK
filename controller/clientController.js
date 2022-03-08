const clientModel = require('../model/clientModel')

module.exports = {
  listClients: async (req, res) => {
    try {
      const listClientsResult = await clientModel.listCLients(req.con)
      res.status(200).send(listClientsResult)
    } catch (error) {
      console.error('algo salio mal al obtener los PROVEEDORES ', error);
      res.status(500).send({ errorMessage: error })
    }
  },
  addClient: async (req, res) => {
    try {
      const newClientData = req.body
      const client = Object.values(newClientData)
      const clientInsertResult = await clientModel.addClient(req.con, [client])

      res.status(201).send(clientInsertResult)
    } catch (error) {
      console.error('algo salio mal al obtener los PROVEEDORES ', error);
      res.status(500).send({ errorMessage: error })
    }
  },
}