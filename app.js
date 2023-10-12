const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use( express.static(publicPath));

app.listen(3001, ()=>{
    console.log('Servidor 3001')
});

//uso de ruta
const home = path.resolve(__dirname, './views/home.html')

app.get('/', (req, res)=>{
    res.sendFile(home)
});
