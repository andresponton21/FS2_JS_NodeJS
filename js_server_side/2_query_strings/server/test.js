

const PORT = 80
const http = require("http")
const url = require('url')
const host = 'localhost'
const app= http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    let urlR = url.parse(req.url, true).query;
    let date = new Date();
    let returnDate = ` the date is: ${date.toDateString()}`
    res.write(returnDate)
    urlR = ` and the url requested is url: http://  ${host} : ${PORT} `
    res.end(urlR)

})

app.listen(PORT, host, () => {
    console.log(`Server started: http://${host}:${PORT}/`)
})