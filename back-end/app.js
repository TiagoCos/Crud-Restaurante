var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); 

var app = express();

let db = require('./config/database')
db('mongodb://localhost:27017/4mat2020')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const fornecedor = require('./routes/fornecedor')
app.use('/fornecedor', fornecedor)

const mercadoria = require('./routes/mercadoria')
app.use('/mercadoria', mercadoria)

const consumidor = require('./routes/consumidor')
app.use('/consumidor', consumidor)

const saida = require('./routes/saida')
app.use('/saida', saida)

const extrato = require('./routes/extrato')
app.use('/extrato', extrato)

const cardapio = require('./routes/cardapio')
app.use('/cardapio', cardapio)

module.exports = app;
