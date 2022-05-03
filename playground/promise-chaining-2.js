require('../src/db/mongoose')
const { translateOptions } = require('mongodb/lib/utils')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('62576c9107f9fb4b041f2699').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count 
}

deleteTaskAndCount('62577b729848d944e8de1be0').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})