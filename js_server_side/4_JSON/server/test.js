


const express = require('express')
const PORT = 80
const app = express()
const data = { firstName: 'Mark', lastName: 'Smith', email: 'somethingd@gmail.com', address: 'los angeles, ca', phone: '1234-1234', verified: 'yes' };
app.get('/', (req, res) => {
    res.end(JSON.stringify(data))
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}/`)
})