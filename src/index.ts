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
    const query = req.query
    if (!isInstanceOfQueryInput(query)) {
        res.status(400).json('Invalid input')
        return
    }

    const num1 = parseInt(query.num1 as string)
    const num2 = parseInt(query.num2 as string)
    res.status(200).json(num1 + num2)
})

app.get('/mul', function (req, res) {
    const query = req.query
    if (!isInstanceOfQueryInput(query)) {
        res.status(400).json('Invalid input')
        return
    }

    const num1 = parseInt(query.num1 as string)
    const num2 = parseInt(query.num2 as string)
    res.status(200).json(num1 * num2)
})

app.get('/div', function (req, res) {
    const query = req.query
    if (!isInstanceOfQueryInput(query)) {
        res.status(400).json('Invalid input')
        return
    }

    const num1 = parseInt(query.num1 as string)
    const num2 = parseInt(query.num2 as string)
    res.status(200).json(num1 / num2)
})

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}`)
})
