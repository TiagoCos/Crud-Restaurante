const mongoose = require('mongoose')

const mongooseSeq = require('mongoose-sequence')(mongoose);

const esquema = mongoose.Schema({
   consumidor: {
      type: mongoose.ObjectId,
      ref: 'Consumidor',
      required: true
   },
   data_saida: {
      type: Date, 
      required: true,
   },
   forma_pagamento: {
      type: String,
      enum: ['dinheiro', 'credito', 'debito'],
      required: true
   },
   numero_saida: {
      type: Number,
      required: true,
      index: { unique: true }
   }
})


esquema.plugin(mongooseSeq, {inc_field: 'numero_saida', start_seq: 1});


module.exports = mongoose.model('Saida', esquema, 'saidas')