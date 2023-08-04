const express= require('express');
const path= require('path');
const app= express();
const publicFolderPath= path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath));

app.listen(3000, ()=>{
    console.log("Corriendo")
});
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

//app.get('/ola', (req,res)=>{res.send('funcionando')});