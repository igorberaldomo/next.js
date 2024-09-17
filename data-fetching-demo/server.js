const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// para rodar após instalação rode o comando node server
server.use(middlewares);
server.use((req, res, next) =>{
    console.log("Request recieved")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.use(router);

server.listen(3001, () => {
    console.log("JSON Server is running")
})