// Importa a biblioteca express para criar o servidor e gerenciar rotas.
const express = require('express');
// Importa a biblioteca mongoose para conectar e interagir com o MongoDB.
const mongoose = require('mongoose');
// Importa as rotas da API definidas em um arquivo separado.
const apiRoutes = require('./routes/api');
// Importa o middleware de tratamento de erros.
const errorMiddleware = require('./middleware/errorMiddleware');

// Cria uma nova instância do aplicativo Express.
const app = express();

// Middleware para analisar o corpo das requisições em formato JSON.
app.use(express.json());

// Configura as rotas da API, prefixando-as com '/api'.
app.use('/api', apiRoutes);

// Adiciona o middleware de tratamento de erros, que será chamado quando ocorrer um erro.
app.use(errorMiddleware);

// Exporta a instância do aplicativo para que possa ser utilizada em outros arquivos
module.exports = app;
