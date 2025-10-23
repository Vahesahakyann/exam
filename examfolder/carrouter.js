import express from 'express';
import { addcar, deletecar, getallcars, getcarbyid } from './controllers/carfunctions.js';
const checkage=((req,res,next)=>{
  try{if(req.body.age==undefined){res.send("missing age")}
else if(req.body.age<18){res.status.apply(401).send("you are not adult")}}catch(err){res.status(400).send("missing age")}
next();})
export const router=express.Router();
router.get('/',(req,res)=>{getallcars(req,res)})
router.get('/:id',(req,res)=>{getcarbyid(req,res)})
router.post('',checkage,(req,res)=>{addcar(req,res)})
router.delete('/:id',(req,res)=>{deletecar(req,res)})
 