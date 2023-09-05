const Fornecedor = require('../models/Fornecedor')

const controller = {}

controller.novo = async (req, res) => {
   try {
      await Fornecedor.create(req.body)
      res.status(201).end()
   }
   catch(erro) {
      console.log(erro)
      res.status(500).send(erro)
   }
}

controller.listar = async (req, res) => {
   
   if(Object.keys(req.query).length > 0) {
      busca(req, res)
   }
   else {
   
      try {
         const lista = await Fornecedor.find()
         res.send(lista) 
      }
      catch(erro) {
         console.log(erro)
         res.status(500).send(erro)
      }
   }
}

controller.obterUm = async (req, res) => {
   try {
      const id = req.params.id
      const obj = await Fornecedor.findById(id)
      if(obj) { 
         res.send(obj)
      }
      else {
         res.status(404).end()
      }
   }
   catch(erro) {
      console.log(erro)
      res.status(500).send(erro)
   }
}

controller.atualizar = async (req, res) => {
   try {
      const id = req.body._id
      const obj = await Fornecedor.findByIdAndUpdate(id, req.body)
      if(obj) {
         res.status(204).end()
      }
      else {
         res.status(404).end()
      }
   }
   catch(erro) {
      console.log(erro)
      res.status(500).send(erro)
   }
}

controller.excluir = async (req, res) => {
   try {
      const id = req.body._id
      const obj = await Fornecedor.findByIdAndDelete(id)
      if(obj) {
         res.status(204).end()
      }
      else {
         res.status(404).end()
      }
   }
   catch(erro) {
      console.log(erro)
      res.status(500).send(erro)
   }
}

async function busca (req, res) {
   
   let criterio = {}
   let atrib = Object.keys(req.query)[0]
   let valor = Object.values(req.query)[0]
   
   criterio[atrib] = { $regex: valor, $options: 'i' }
   console.log(criterio)
   
   try{
      let lista = await Fornecedor.find(criterio)
      res.send(lista)
   }
   catch(erro) {
      console.log(erro)
      res.status(500).send(erro)
   }

}

module.exports = controller