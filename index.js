const express = require ('express')
const app = express()
// const cors = require('cors')
const port = process.env.PORT || 5000
asdasdfasdfsdfasdfd
// app.use(cors())

const chef = require('./data/chefData.json')
const recipes = require('./data/recipe.json')

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.get('/chef', (req, res)=>{
    res.send(chef)
})

app.get('/chef/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    console.log(id);
    const chefData = recipes.find(recipe => recipe.id === id)
    res.send(chefData)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})