import express from 'express';
import routesProducts from './src/routes/routesProducts.js';
import routesText from './src/routes/routesChat.js';
import cors from 'cors';
import { db } from './src/persistencia/db.js';

const servidor = express()

// config basica:
servidor.use(cors());
servidor.use(express.json())
servidor.use(express.urlencoded({extended:true}))

//  rutas inicializar:
servidor.use("/", routesProducts)
servidor.use("/chat", routesText)

const PORT = process.env.PORT || 8080;
servidor.listen(PORT, () => {
  try {
    db()
    console.log("base conectada")
  } catch (e) {
    console.log(e);
  }
  console.log(`Escuchando el servidor ${PORT}`);
});