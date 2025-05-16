const conn = require("../database/connection");

module.exports = {
    listarTodos: () => conn("produto"),
    listarPorId: (id) => conn("produto").where("id", id).first(),
    inserir: (dados) => conn("produto").insert(dados),
    atualizar: (id, dados) => conn("produto").where("id", id).update(dados),
    deletar: (id) => conn("produto").where("id", id).delete()
};
