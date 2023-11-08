//requisitando os módulos

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//configurando o express para o postman e para usar a página

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//configurando o banco de dados

mongoose.connect("mongodb://127.0.0.1:27017/futurefest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//criando a model do usuário

const UsuarioSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String,required: true},
    senha: {type: String},
    telefone: {type: Number},
    endereco: {type: String},
    feedback: {type: String}
});

//criando a model do pet

const PetSchema = new mongoose.Schema({
    nome: {type: String},
    raca: {type: String},
    sexo: {type: String},
    idade: {ype: Number}
})

//criando a model do chip
//falta arrumar no site!!!!!!!!*********


const Usuario = mongoose.model("Usuario", UsuarioSchema);
const Pet = mongoose.model("Pet", PetSchema)

app.post("/cadastrousuario", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const feedback = req.body.feedback;
    const usuario = new Usuario({
        email: email,
        senha: senha
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
    const nome = req.body.nome;
    const raca = req.body.raca;
    const sexo = req.body.sexo;
    const idade = req.body.idade;
    const Pet = new Pet({
        nome: nome,
        raca: raca,
        sexo: sexo,
        idade: idade,
    });

    try {
        const newPet = await Pet.save();
        res.json({error: null,msg: "Cadastro ok",PetId: newPet._id});

    } catch (error) {}});

app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});