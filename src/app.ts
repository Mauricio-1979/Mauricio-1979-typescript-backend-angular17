import express from 'express';
import routesProduct from './routes/product';
import routesUser from './routes/user';
//import { conectarDB } from './db/database';
import cors from 'cors';
require('dotenv').config();
 
    const app = express();
    app.use(cors());
    app.use(express.json());
    
      
    app.use('/api/products', routesProduct);
    app.use('/api/users', routesUser);
  


export default app;