// Importa o modelo Item, que representa a coleção de itens no banco de dados.
const Item = require('../models/Item'); 

// Função para obter todos os itens
exports.getAllItems = async (req, res) => {
  try {
    // Busca todos os itens no banco de dados usando o modelo Item.
    const items = await Item.find(); 
    // Retorna os itens encontrados na resposta.
    res.json(items);
  } catch (error) {
    // Se ocorrer um erro durante a busca, retorna um erro com status 500.
    res.status(500).json({ error: 'Error fetching items' });
  }
};

// Função para obter um item pelo ID
exports.getItemById = async (req, res) => {
  try {
    // Busca um item específico pelo ID fornecido nos parâmetros da requisição.
    const item = await Item.findById(req.params.id); 
    // Se o item não for encontrado, retorna um erro com status 404.
    if (!item) return res.status(404).json({ error: 'Item not found' });
    // Retorna o item encontrado na resposta.
    res.json(item);
  } catch (error) {
    // Se ocorrer um erro durante a busca, retorna um erro com status 500.
    res.status(500).json({ error: 'Error fetching item' });
  }
};

// Função para criar um novo item
exports.createItem = async (req, res) => {
  try {
    // Cria uma nova instância do modelo Item com os dados do corpo da requisição.
    const item = new Item(req.body);
    // Salva o novo item no banco de dados.
    await item.save();
    // Retorna uma mensagem de sucesso com status 201.
    res.status(201).json({ message: 'Item created successfully' });
  } catch (error) {
    // Se ocorrer um erro durante a criação, retorna um erro com status 400.
    res.status(400).json({ error: 'Error creating item' });
  }
};

// Função para atualizar um item
exports.updateItem = async (req, res) => {
  try {
    // Busca e atualiza um item pelo ID fornecido nos parâmetros da requisição.
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Retorna o item atualizado
      runValidators: true // Valida os dados antes de atualizar
    });
    // Se o item não for encontrado, retorna um erro com status 404.
    if (!item) return res.status(404).json({ error: 'Item not found' });
    // Retorna uma mensagem de sucesso.
    res.json({ message: 'Item updated successfully' });
  } catch (error) {
    // Se ocorrer um erro durante a atualização, retorna um erro com status 400.
    res.status(400).json({ error: 'Error updating item' });
  }
};
