const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/controllerUser")(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
}) 