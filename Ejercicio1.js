import express from 'express';

const app = express();
const PORT = 8080;
const routerPersona = express.Router();
const routerMascota = express.Router();

let objPersona = [];
let objMascota = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/personas', routerPersona);
app.use('/mascotas', routerMascota);
app.use(express.static('Ejercicios'));

const server = app.listen(PORT, () =>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});

server.on('error', error => console.log('Error en el servidor', error));

routerPersona.post('/guardar', (req,res) => {
    try {
        objPersona.push(req.body);
        console.log(objPersona);
        res.status(200).json('Se grabo con exito');
    } catch (error) {
        res.status(400).json('Hubo un error al grabar');
    }
});

routerPersona.get('/listar', (req,res) => {
    try {
        res.status(200).json(objPersona);
    } catch (error) {
        res.status(400).json('Hubo un error al leer');
    }
});

routerMascota.post('/guardar', (req,res) => {
    try {
        objMascota.push(req.body);
        console.log(objMascota);
        res.status(200).json('Se grabo con exito');
    } catch (error) {
        res.status(400).json('Hubo un error al grabar');
    }
});

routerMascota.get('/listar', (req,res) => {
    try {
        res.status(200).json(objMascota);
    } catch (error) {
        res.status(400).json('Hubo un error al leer');
    }
});