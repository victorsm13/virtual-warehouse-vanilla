import express from 'express';
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/home', (req, res)=>{
    console.log('OLá');
})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "loginPage.html"))
});

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "loginPage.html"))
})

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
