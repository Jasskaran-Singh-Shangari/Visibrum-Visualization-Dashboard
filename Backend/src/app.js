import express from 'express';
import cors from "cors";


const app=express();

// SOME IMPORTANT MIDDLEARES
app.use(cors());
app.use(express.json());


export default app;