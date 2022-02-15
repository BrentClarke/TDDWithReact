let express = require('express');


if (process.argv.includes("-flag")){
    console.log("flag")
    console.log(process.argv)
  }
let server = express()
let router = server.router('./db.json');

let stub = {
    //it will take the first object name and make a path out of it 
    // /books
    "books":[
        {"name": "Refactoring"},
        {"name":"Domain Driven Design"}
    ]
}

let route = Object.keys(stub)
let resObj = stub[Object.keys(stub)[0]]
server.get(`/${route}`, (request,response)=> {
    response.json(resObj)
})

server.use((req,res,next) =>{
    if(req.method === 'DELETE' && req.query['_cleanup']){
        const db = server.router.db;
        db.set('books',[]).write();
        res.sendStatus(204);
    } else {
        next
    }
})
server.listen(8080);
console.log("Stub server is listening on port 8080...");
console.log('/'+route)
