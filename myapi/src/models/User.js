// Importa a biblioteca mongoose para modelar dados em MongoDB.
const mongoose = require('mongoose');
// Importa a biblioteca bcrypt para realizar o hashing de senhas.
const bcrypt = require('bcrypt');

// Define um esquema para o modelo User.
const userSchema = new mongoose.Schema({
  // Campo 'username' que armazena o nome de usuário.
  username: { 
    type: String,      // O tipo do campo é String.
    required: true,    // Este campo é obrigatório.
    unique: true       // Este campo deve ser único na coleção.
  },
  // Campo 'email' que armazena o endereço de e-mail do usuário.
  email: { 
    type: String,      // O tipo do campo é String.
    required: true,    // Este campo é obrigatório.
    unique: true       // Este campo deve ser único na coleção.
  },
  // Campo 'password' que armazena a senha do usuário.
  password: { 
    type: String,      // O tipo do campo é String.
    required: true     // Este campo é obrigatório.
  }
});

// Middleware pré-salvamento que é executado antes de salvar um documento.
userSchema.pre('save', async function (next) {
  // Verifica se a senha foi modificada. Se não foi, passa para o próximo middleware.
  if (!this.isModified('password')) return next();
  
  // Realiza o hashing da senha usando bcrypt antes de salvar.
  this.password = await bcrypt.hash(this.password, 10);
  
  // Chama a função next() para continuar o fluxo de salvamento.
  next();
});

// Cria o modelo 'User' a partir do esquema definido.
const User = mongoose.model('User', userSchema);

// Exporta o modelo User para que possa ser utilizado em outras partes da aplicação.
module.exports = User;
