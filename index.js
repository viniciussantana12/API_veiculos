const express = require('express')
const app = express()
const db = require('./bd')
const dbcontext = db.VeiculosDatabase()

app.use(express.json());

app.listen(3001, () => {
    console.log("servidor iniciado")
})

//const veiculos = [];

//GET
app.get('/veiculos', async (req, res) => {
    //res.status(200).send({veiculos :veiculos})
    res.status(200).send(await dbcontext.list())
})

//GET BY ID
app.get('/veiculos/:id', async (req, res) => {
    //const veiculo = veiculos.find(x => x.id == req.params.id)
    //res.status(200).send(veiculo)
    res.status(200).send(await dbcontext.get(req.params.id))
})

//POST
app.post('/veiculos', async (req, res) => {
    //veiculos.push(req.body)
    //res.status(200).send("veículo cadastrado")
    res.status(200).send(await dbcontext.insert(req.body))
})

//PUT
app.put('/veiculos/:id', async (req, res) => {
    //const veiculo = veiculos.find(x=> x.id == req.params.id)
    //const IDVeiculo = veiculos.indexOf(veiculo)
    //veiculos[IDVeiculo] = req.body
    //res.status(200).send("veículo atualizado com sucesso")
    res.status(200).send(await dbcontext.update(req.body, req.params.id))
})

//DELETE
app.delete('/veiculos/:id', async (req, res) => {
    //const veiculo = veiculos.find(x => x.id == req.params.id)
    //const idVeiculo = veiculos.indexOf(veiculo)
    //veiculos.splice(idVeiculo, 1)
    //res.status(200).send("veículo excluido com sucesso")
    await dbcontext.del(req.params.id)
    res.status(200).send("aluno excluido com sucesso")
})