import express from 'express'
const app = express();

app.get('/', (req,res)=>{
    res.send('./index.html')
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000.');
})