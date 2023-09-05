const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   nome: {
      type: String,
      required: true
   },
   descricao: {
      type: String,
      require: true
   },
   unidade_medida: {
      type: String,
      required: true,
      enum: ['m', 'l', 'un', 'kg', 'g'],
      default: 'un'
   },
   quantidade: {
      type: Number,
      required: true,
      default: 0 
   },
   categoria: {
      type: String,
      required: true
   },
   preco: {
      type: Number,
      required: true
   },
   id_prato: {
      type: Number,
      required: true,
      index: { unique: true }
   }
   
})

module.exports = mongoose.model('Cardapio', esquema, 'cardapio')