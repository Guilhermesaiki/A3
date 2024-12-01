// Exporta uma função middleware que trata erros na aplicação.
module.exports = (err, req, res, next) => {
    // Registra o stack do erro no console para depuração.
    console.error(err.stack);
    
    // Retorna uma resposta com status 500 (Erro Interno do Servidor) e uma mensagem genérica.
    res.status(500).send('erro!');
};
