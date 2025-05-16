const produtoController = require("../controllers/produtoController");

module.exports = (server) => {
    server.get("/", produtoController.boasVindas);
    server.get("/produto", produtoController.listar);
    server.get("/produto/:idProd", produtoController.listarPorId);
    server.post("/produto", produtoController.criar);
    server.put("/produto/:idProd", produtoController.atualizar);
    server.del("/produto/:idProd", produtoController.deletar);
};
