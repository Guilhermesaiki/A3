// Importa a biblioteca mongoose, que fornece uma solução baseada em esquemas para modelar dados em MongoDB.
const mongoose = require('mongoose');

// Define um esquema para o modelo Item.
const itemSchema = new mongoose.Schema({
    // Campo 'name' que armazena o nome do item.
    name: {
        type: String,   // O tipo do campo é String.
        required: true  // Este campo é obrigatório.
    },
    // Campo 'price' que armazena o preço do item.
    price: {
        type: Number,   // O tipo do campo é Number.
        required: true  // Este campo é obrigatório.
    },
});

// Cria o modelo 'Item' a partir do esquema definido.
const Item = mongoose.model('Item', itemSchema);

// Exporta o modelo Item para que possa ser utilizado em outras partes da aplicação.
module.exports = Item;
