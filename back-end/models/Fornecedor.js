const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   cnpj: {
      type: String,
      required: true,
      index: { unique: true }
   },
   inscricao_estadual: {
      type: String,
      required: true,
      index: { unique: true }
   },
   endereco: {
      type: String,
      required: true
   },
   razao_social: {
      type: String,
      required: true
   },
   telefone: {
      type: String,
      required: true
   },
   telefone2: {
      type: String,
   },
   email: {
      type: String,
      required: true
   }
})

module.exports = mongoose.model('Fornecedor', esquema, 'fornecedores')