const clienteController = require("../controllers/clienteController");

module.exports = (server) => {
    server.get("/cliente", clienteController.listar);
    server.get("/cliente/:id", clienteController.buscar);
    server.post("/cliente", clienteController.criar);
    server.put("/cliente/:id", clienteController.atualizar);
    server.del("/cliente/:id", clienteController.deletar);
};
