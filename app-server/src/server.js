
const express = require("express")
const app = express()
const port = 4040

app.get("/", (req, res) => {
	res.send("Hello Destiny")
})

app.listen(port, () => {
	console.log(`Destiny server is listening on port ${port}`)
})