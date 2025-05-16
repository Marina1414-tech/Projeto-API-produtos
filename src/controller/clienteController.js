const errors = require("restify-errors");
const Cliente = require("../models/clienteModel");

server.get( "/cliente" , (req, res, next) =>{ 
    conn( "cliente" )
        .then(  (dados) =>{
            res.send( dados )
        } , next )  
 } )


 server.get( "/cliente/:idCliente" , (req, res, next) =>{ 
    id = req.params.idCliente
    conn( "cliente" )
        .where( "id" , id )
        .first()
        .then(  (dados) =>{
            res.send( dados )
        } , next )  
 } )

 server.post( "/cliente" , (req, res, next) =>{ 
    conn( "cliente" )
        .insert( req.body )
        .then(  (dados) =>{
            if( !dados ){
                return res.send( new errors.BadRequestError("Não foi possível inserir") )
            }
            res.send( dados )
        } , next )  
 } )
 server.del("/cliente/:idCliente", (req, res, next) => {
     const id = req.params.idCliente
     conn("cliente")
         .where("id", id)
         .delete()
         .then((dados) => {
             if (!dados) {
                 return next(new errors.NotFoundError("cliente não encontrado"))
             }
             res.send(200, { success: true })
             return next()
         }, (err) => {
             return next(new errors.BadRequestError("Não foi possível excluir"))
         })
 })
 
  server.put("/cliente/:idCliente", (req, res, next) => {
     const id = req.params.idCliente
     conn("cliente")
         .where("id", id)
         .update(req.body)
         .then((dados) => {
             if (!dados) {
                 return next(new errors.NotFoundError("cliente não encontrado"))
             }
             res.send(200, { success: true })
             return next()
         }, (err) => {
             return next(new errors.BadRequestError("Não foi possível editar"))
         })
 })
 
 server.get( "/" , (req, res, next) =>{ 
     //res.setHeader( 'Content-type' , 'application/json')
     res.send( { "resposta" : "Sejam bem-vindos à nossa Lojinha" } )
  } )