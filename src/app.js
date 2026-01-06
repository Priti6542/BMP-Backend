import express from 'express';
import pool from './config/database.config.js';

const app=express();

app.use(express.json());


pool.connect((err,client,release)=>{
    if(err){
        console.log("PostgreSQL connection error:", err.message);
    }else{
        console.log("PostgreSQL connected successfully");
        release();  
    }
});

export default app;