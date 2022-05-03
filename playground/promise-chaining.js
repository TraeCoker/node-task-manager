require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6258c1185877ac5b9071aa25', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})