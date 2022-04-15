const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.eventNames.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.statuus(400).send(e)
    })
})

app.listen(port, ()=> {
    console.log('Server is up on port ' + port)
})