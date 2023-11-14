const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/futurefest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UsuarioSchema = new mongoose.Schema({
    nome: {type: String,required: true},
    email: {type: String,required: true},
    telefone: {type: Number,required: true},
    cep: {type: String,required: true},
    feedback: {type: String,required: true}
});

const PetSchema = new mongoose.Schema({
    nomePet: {type: String,required: true},
    raca: {type: String},
    sexo: {type: String},
    idade: {type: Number}
})

const Usuario = mongoose.model("Usuario", UsuarioSchema);

const Pet = mongoose.model("Pet", PetSchema)

app.post("/cadastrousuario", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const cep = req.body.cep;
    const feedback = req.body.feedback
    const usuario = new Usuario({
        nome: nome,
        email: email,
        telefone: telefone,
        cep: cep,
        feedback: feedback
    });
    
    try {
        const newUsuario = await usuario.save();
        res.json({
            error: null,
            msg: "Cadastro ok",
            UsuarioId: newUsuario._id
        });
    } catch (error) {}
});

app.post("/cadastropet", async (req, res) => {
    const nomePet = req.body.nomePet;
    const raca = req.body.raca;
    const sexo = req.body.sexo;
    const idade = req.body.idade;

    const pet = new Pet({
        nomePet: nomePet,
        raca: raca,
        sexo: sexo,
        idade: idade
    });
    try {
        const newPet = await pet.save();
        res.json({
            error: null,
            msg: "Cadastro ok",
            PetId: newPet._id
        });
    } catch (error) {}
});

app.get("/", async (req, res) => {
    res.sendFile(__dirname + "../../index.html");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});