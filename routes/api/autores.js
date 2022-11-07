// LA IMAGEN ESTA EN BLOB POR ESO RETORNA COMO UNA CADENA DE BYTES
const router = require('express').Router();

const {getAutores,createAutor,updateAutor,deleteAutor }= require ('../../models/autores.model');

router.get('/', (req, res) => {
   
    getAutores()
    .then ((result) => res.json(result[0]))
    .catch((err) => res.json({error: err}));

    

});

router.post('/', (req, res) => {
    const {nombre,email,imagen } = req.body;
    createAutor({nombre,email,imagen })
    .then((result) => res.json(result))
    .catch((err) => res.json({error: err}));
});

router.put('/:idAutores', (req, res) => {
    const {idAutores} = req.params;
    const {nombre,email,imagen } = req.body;
    updateAutor(idAutores,{nombre,email,imagen })
    .then((result) => res.json(result))
    .catch((err) => res.json({error: err}));
});


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    deleteAutor(id)
    .then((result) => res.json(result))
    .catch((err) => res.json({error: err}));
});


module.exports = router;