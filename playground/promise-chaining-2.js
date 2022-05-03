require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('62576c9107f9fb4b041f2699').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})