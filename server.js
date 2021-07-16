const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('helo world');    
})

app.listen(3000,()=>{
    console.log('sever start port:3000')
})