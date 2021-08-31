const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: "*",
}))
app.use(express.json())

// our data
let datas = {data:[], views: 0}
datas.views++


app.get('/gether', (req, res)=>{
    res.status(200).json(datas)
})

app.post('/new', (req, res)=>{
    const {name} = req.body
    const {age} = req.body

    const data = {
        name,
        age
    }

    datas.data.push(data)

    res.status(200).json({ok: 100})
})


app.listen(80, ()=>console.log("on the main port"))


const {name} = req.body



// fetch("/new", {
//     method: "post",
//     headers: {
//     'content-Type' : 'application/json'
// },
// body: JSON.stringify({
//     name: "ji",
//     age: "da"
// })
// })