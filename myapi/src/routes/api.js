// Importa a biblioteca express para criar o servidor e gerenciar rotas.
const express = require('express');
// Importa o controlador de autenticação, que contém as funções para registro e login.
const authController = require('../controllers/authController');
// Importa o controlador de itens, que contém as funções para manipulação de itens.
const itemController = require('../controllers/itemController');
// Importa o middleware de autenticação, que protege rotas que requerem autenticação.
const authMiddleware = require('../middleware/authMiddleware');
// Cria um novo objeto de roteador usando o express.Router().
const router = express.Router();

// Define a rota POST para registro de novos usuários, chamando a função register do authController.
router.post('/register', authController.register);

// Define a rota POST para login de usuários, chamando a função login do authController.
router.post('/login', authController.login);

// Define a rota GET para obter todos os itens, protegida pelo authMiddleware.
router.get('/items', authMiddleware, itemController.getAllItems);

// Define a rota GET para obter um item específico pelo ID, protegida pelo authMiddleware.
router.get('/items/:id', authMiddleware, itemController.getItemById);

// Define a rota POST para criar um novo item, protegida pelo authMiddleware.
router.post('/items', authMiddleware, itemController.createItem);

// Define a rota PUT para atualizar um item específico pelo ID, protegida pelo authMiddleware.
router.put('/items/:id', authMiddleware, itemController.updateItem);

// Exporta o roteador para que possa ser utilizado em outras partes da aplicação.
module.exports = router;
