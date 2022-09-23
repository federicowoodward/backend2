const express = require('express')
const http = require('http')
const {Server: SocketServer} = require('socket.io')

const app = express();
const httpServer = http.createServer(app)
const socketServer = new SocketServer(httpServer)
const morgan = require("morgan");
const port = process.env.PORT || 8080;
const router = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static('public'));

//* Handlebars config
const { engine } = require("express-handlebars");
app.engine('handlebars',engine());
app.set("view engine", "handlebars")
app.set("views","./src/views")

  
app.get("/", (req, res)=>{
  res.render("productos")
})
app.use("/api", router);

const mensajes = []

socketServer.on("connection",(client)=>{
  console.log("usuario conectado")
  console.log(client.id)
  socketServer.sockets.emit("mensajesArray", mensajes)
  client.on("disconnect", ()=>{
    console.log("Cliente desconectado")
  })
  client.on("mensaje", (msn)=>{
    mensajes.push(msn)
    socketServer.sockets.emit("mensajesArray", mensajes)
  })
})

httpServer.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
