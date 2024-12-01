// Importa o modelo User, que representa a coleção de usuários no banco de dados.
const User = require('../models/User');
// Importa a biblioteca jsonwebtoken para criação de tokens JWT 
const jwt = require('jsonwebtoken');
// Importa a biblioteca bcrypt para realizar o hashing de senhas.
const bcrypt = require('bcrypt');

// Função para registrar um novo usuário.
exports.register = async (req, res) => {
  try {
    // Extrai username, email e password do corpo da requisição.
    const { username, email, password } = req.body;

    // Cria uma nova instância do modelo User com os dados fornecidos.
    const user = new User({ username, email, password });

    // Salva o novo usuário no banco de dados.
    await user.save();

    // Se o registro for bem-sucedido, retorna uma resposta com status 201 e uma mensagem de sucesso.
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Se ocorrer um erro durante o registro, retorna uma resposta com status 400 e uma mensagem de erro.
    res.status(400).json({ error: 'Error registering user' });
  }
};
