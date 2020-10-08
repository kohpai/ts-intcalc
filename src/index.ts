import express from 'express'

interface QueryInput {
    num1: string
    num2: string
}

const port = 5000
const app = express()

function isInstanceOfQueryInput(object: any): object is QueryInput {
    return 'num1' in object && 'num2' in object
}

app.get('/add', function (req, res) {
    // your code ...
})

app.get('/mul', function (req, res) {
    // your code ...
})

app.get('/div', function (req, res) {
    // your code ...
})

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}`)
})
