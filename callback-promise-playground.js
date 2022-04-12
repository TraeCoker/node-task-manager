//callback example
const doWorkCallBack = (callback) => {
    setTimeout(() => {
        //callback('This is an error!', undefined)
        callback(undefined, [1, 2, 3])
    }, 2000)
}

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})

//Promise Example
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject("Things went wrong!")
        resolve([1, 2, 3])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Succes!', result)
}).catch((error) => {
    console.log('Error!', error)
})

