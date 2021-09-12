const express=require('express');
const app = express();
const News = require('./news/news');

app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.send('<h1>Hello from server.</h1>');
});


app.listen(3000,()=>{
    console.log('Port is Listing.');
})