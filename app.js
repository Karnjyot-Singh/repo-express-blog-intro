const express = require("express");
const content = require ('./data');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res)=>{
    res.json(data.posts);
});

app.listen(port, () => {
    console.log("Il server è in ascolto");
})

