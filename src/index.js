const express = require ('express')
const { send } = require('express/lib/response')
const app = express()
const port = 8888
const db = require('./config')
db.connect();
const cors = require('cors')
const Routes = require("./routes")

app.use(express.json());
app.use('/api', cors(), Routes)

app.get('/phuocdeptraivodich', function(req, res) {
    res.send("hello world")
})

app.listen(port, () => console.log('Phuoc dep trai'))

