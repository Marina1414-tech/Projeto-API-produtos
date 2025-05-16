const errors = require("restify-errors");
const Produto = require("../models/produtoModel");

server.get( "/produto" , (req, res, next) =>{ 
    conn( "produto" )
        .then(  (dados) =>{
            res.send( dados )
        } , next )  
 } )


 server.get( "/produto/:idProd" , (req, res, next) =>{ 
    id = req.params.idProd
    conn( "produto" )
        .where( "id" , id )
        .first()
        .then(  (dados) =>{
            res.send( dados )
        } , next )  
 } )

 server.post( "/produto" , (req, res, next) =>{ 
    conn( "produto" )
        .insert( req.body )
        .then(  (dados) =>{
            if( !dados ){
                return res.send( new errors.BadRequestError("Não foi possível inserir") )
            }
            res.send( dados )
        } , next )  
 } )
 server.del("/produto/:idProd", (req, res, next) => {
     const id = req.params.idProd
     conn("produto")
         .where("id", id)
         .delete()
         .then((dados) => {
             if (!dados) {
                 return next(new errors.NotFoundError("Produto não encontrado"))
             }
             res.send(200, { success: true })
             return next()
         }, (err) => {
             return next(new errors.BadRequestError("Não foi possível excluir"))
         })
 })
 
  server.put("/produto/:idProd", (req, res, next) => {
     const id = req.params.idProd
     conn("produto")
         .where("id", id)
         .update(req.body)
         .then((dados) => {
             if (!dados) {
                 return next(new errors.NotFoundError("Produto não encontrado"))
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