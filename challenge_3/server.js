let express = require('express');
let app = express();
let path = require('path')

app.use(express.static('public'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(3000,()=> console.log('listening port 3000'))