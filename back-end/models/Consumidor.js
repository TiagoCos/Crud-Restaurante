const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   cpf: {
      type: String,
      required: true,
      index: { 
         unique: true
      }
   },
   cep: {
      type: String
   },
   endereco: {
      type: String,
      required: true
   },
   telefone: {
      type: String,
      required: true
   },
   email: {
      type: String,
   },
   data_nascimento: {
      type: Date
   }
})

module.exports = mongoose.model('Consumidor', esquema, 'consumidores')