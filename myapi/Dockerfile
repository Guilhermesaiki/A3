# Especifica a imagem base do Node.js na versão 14.
FROM node:14

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /usr/src/app

# Copia os arquivos de definição de dependências para o diretório de trabalho.
COPY package*.json ./

# Instala as dependências do projeto.
RUN npm install

# Copia todo o restante do código da aplicação para o diretório de trabalho.
COPY . .

# Expõe a porta 3000 para permitir conexões externas.
EXPOSE 3000

# Define o comando padrão para iniciar a aplicação.
CMD ["npm", "start"]
