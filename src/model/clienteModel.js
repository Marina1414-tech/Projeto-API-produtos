const conn = require("../database/connection");

module.exports = {
    listarTodos: () => conn("cliente"),
    buscarPorId: (id) => conn("cliente").where("id", id).first(),
    inserir: (dados) => conn("cliente").insert(dados),
    atualizar: (id, dados) => conn("cliente").where("id", id).update(dados),
    deletar: (id) => conn("cliente").where("id", id).delete()
};
