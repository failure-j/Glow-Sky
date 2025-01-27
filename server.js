import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app=express();
export const port= 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/data',(req,res)=>{
    res.sendFile(path.join(__dirname,'ProductData.json'))
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})