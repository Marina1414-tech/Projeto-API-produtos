const restify = require("restify");

const server = restify.createServer({
    name: "Lojinha",
    version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8001, () => {
    console.log("%s executando em: %s", server.name, server.url);
});

require("./routes/produtoRoutes")(server);
require("./routes/clienteRoutes")(server);
