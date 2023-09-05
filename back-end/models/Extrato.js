const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   saida: {
      type: mongoose.ObjectId,
      ref: 'Saida',
      required: true
   },
   cardapio: {
      type: mongoose.ObjectId,
      ref: 'Cardapio',
      required: true
   },
   desconto: {
      type: Number,
      default: 0, 
      min: 0
   },
   acrescimo: {
      type: Number,
      default: 0,
      min: 0
   },
   quantidade: {
      type: Number,
      required: true,
      validate: {
         validator: function(val) {
            return val > 0
         },
         message: 'Entre com um valor maior que 0'
      }
   }
})

module.exports = mongoose.model('Extrato', esquema, 'extratos')