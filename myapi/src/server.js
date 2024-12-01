// Carrega as variáveis de ambiente do arquivo .env para process.env.
require('dotenv').config();
// Importa o módulo http nativo do Node.js para criar o servidor.
const http = require('http');
// Importa a instância do aplicativo Express, que contém as rotas e middleware.
const app = require('./app');
// Importa a função para conectar ao banco de dados.
const connectDB = require('./config/database');

// Define a porta em que o servidor irá escutar. Usa a variável de ambiente PORT ou 3000 como padrão.
const PORT = process.env.PORT || 3000;

// Cria um servidor HTTP utilizando a instância do aplicativo Express.
const server = http.createServer(app);

// Conecta ao banco de dados e, em seguida, inicia o servidor.
connectDB().then(() => {
  server.listen(PORT, () => {
    // Exibe uma mensagem no console informando que o servidor está em execução.
    console.log(`Server running on port ${PORT}`);
  });
});
