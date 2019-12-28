const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs')

app = express();
let a = require("./question.json")


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', express.static('./'))


app.post('/reply', (req, res) => {
    a.push(req.body)
    console.log(req.body)
    fs.writeFileSync('./question.json', JSON.stringify(a));
    res.json({ success: true })

})


app.get('/read', (req, res) => {
    res.json(a)

})

app.listen(3010)        