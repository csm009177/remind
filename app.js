import express from 'express'
const app = express()
const port = 3131;

app.use(express.static("public"))
app.get('/', (req,res) => {
  res.sendFile('./public/index.html')
})

app.listen(port, ()=>{
console.log(`http://localhost:${port}/`)
});