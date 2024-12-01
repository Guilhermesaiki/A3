// Importa o modelo User, que representa a coleção de usuários no banco de dados.
const User = require('../models/User');
// Importa a biblioteca jsonwebtoken para criar e verificar tokens JWT.
const jwt = require('jsonwebtoken');
// Importa a biblioteca bcrypt para realizar o hashing de senhas.
const bcrypt = require('bcrypt');

// Função para registrar um novo usuário.
exports.register = async (req, res) => {
  try {
    // Extrai username, email e password do corpo da requisição.
    const { username, email, password } = req.body;
    // Cria uma nova instância do modelo User com os dados do usuário.
    const user = new User({ username, email, password });
    // Salva o usuário no banco de dados.
    await user.save();
    // Se o registro for bem-sucedido, retorna uma resposta com status 201 e uma mensagem de sucesso.
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Se ocorrer um erro durante o registro, retorna uma resposta com status 400 e uma mensagem de erro.
    res.status(400).json({ error: 'Error registering user' });
  }
};

// Função para autenticar um usuário e gerar um token JWT.
exports.login = async (req, res) => {
  try {
    // Extrai email e password do corpo da requisição.
    const { email, password } = req.body;
    // Busca o usuário no banco de dados pelo email fornecido.
    const user = await User.findOne({ email });
    // Se o usuário não for encontrado, retorna um erro de autenticação.
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    // Compara a senha fornecida com a senha armazenada (hash) no banco de dados.
    const isMatch = await bcrypt.compare(password, user.password);
    // Se as senhas não coincidirem, retorna um erro de autenticação.
    if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

    // Se a autenticação for bem-sucedida, cria um token JWT com o ID do usuário.
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Retorna o token na resposta.
    res.json({ token });
  } catch (error) {
    // Se ocorrer um erro durante o login, retorna uma resposta com status 400 e uma mensagem de erro.
    res.status(400).json({ error: 'Error on login' });
  }
};
