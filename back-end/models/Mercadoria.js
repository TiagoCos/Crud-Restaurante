const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   codigo: {
      type: Number,
      required: true,
      index: { unique: true }
   },
   preco_compra: {
      type: Number,
      required: true,
      min: 0
   },
   quantidade: {
      type: Number,
      required: true,
      default: 0
   },
   unidade_medida: {
      type: String, 
      required: true,
      enum: ['m', 'l', 'un', 'kg', 'g'], // metros, litros, unidade, quilogramas, gramas
      default: 'un'
   },
   categoria: {
      type: String,
      required: true,
      default: 'Geral'
   },
   fornecedor: {
      type: mongoose.ObjectId,
      ref: 'Fornecedor',
      required: true
   },
   data_validade: {
      type: Date
   }  
})

module.exports = mongoose.model('Mercadoria', esquema, 'mercadoria')