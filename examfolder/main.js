import express from 'express';
import ENVconf from 'dotenv'
import {router as carrouter} from './carrouter.js'
const Carrouter=carrouter;
ENVconf.config();

import cors from 'cors';
const app=express()
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/cars',Carrouter);



app.listen(process.env.PORT,'0.0.0.0',()=>{console.log(`server is running on port ${process.env.PORT}`)})