import express from 'express';
import routesProducts from './routes/routesProducts.js';
import routesChat from './routes/routesChat.js';
import cors from 'cors';

const servidor = express()

// config basica:
servidor.use(cors());
servidor.use(express.json())
servidor.use(express.urlencoded({extended:true}))

//  rutas inicializar:
servidor.use("/", routesProducts)
servidor.use("/chat", routesChat)

const PORT = process.env.PORT || 8080;
servidor.listen(PORT, () => {
  console.log(`Escuchando el servidor ${PORT}`);
});