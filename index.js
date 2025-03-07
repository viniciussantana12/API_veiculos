const express = require('express')
const app = express()

app.use(express.json());

app.listen(3000, () => {
    console.log("servidor iniciado")
})

const veiculos = [];

//GET
app.get('/veiculos', (req, res) => {
    res.status(200).send({veiculos :veiculos})
})

//GET BY ID
app.get('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    res.status(200).send(veiculo)
})

//POST
app.post('/veiculos', (req, res) => {
    veiculos.push(req.body)
    res.status(200).send("veículo cadastrado")
})

//PUT
app.put('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x=> x.id == req.params.id)
    const IDVeiculo = veiculos.indexOf(veiculo)
    veiculos[IDVeiculo] = req.body
    res.status(200).send("veículo atualizado com sucesso")
})

//DELETE
app.delete('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    const idVeiculo = veiculos.indexOf(veiculo)
    veiculos.splice(idVeiculo, 1)
    res.status(200).send("veículo excluido com sucesso")
})