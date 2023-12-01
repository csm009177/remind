import express from 'express'
const app = express()
const port = 3131;

app.use(express.static("public"))
app.get('/', )

app.listen(port, ()=>{
console.log(`http://localhost:${port}/`)
});