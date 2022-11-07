const router = require('express').Router();

const {getposts,createpost,updatepost,deletepost,getpostbyautor }= require ('../../models/posts.model');

router.get('/', (req, res) => {
   
    getposts()
    .then ((result) => res.json(result[0]))
    .catch((err) => res.json({error: err}));

    

});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    getpostbyautor(id)
    .then ((result) => res.json(result[0]))
    .catch((err) => res.json({error: err}));
       
});

router.post('/', (req, res) => {
    const {titulo, descripcion, fecha, categoria ,Autores_idAutores	 } = req.body;
    createpost({titulo, descripcion, fecha, categoria ,Autores_idAutores	 })
    .then((result) => res.json(result))
    .catch((err) => res.json({error: err}));

});


router.put('/:idposts', (req, res) => {
    const {idposts} = req.params;

    const {titulo, descripcion, fecha, categoria ,Autores_idAutores	 } = req.body;

    updatepost(idposts,{titulo, descripcion, fecha, categoria ,Autores_idAutores	 })
    .then((result) => res.json(result))
    .catch((err) => res.json({error: err}));
});

router.delete('/:id', (req, res) => {


    const {id} = req.params;
    deletepost(id)
    .then((result) => res.json(result))
    .catch((err) => res.json({error: err}));
});



module.exports = router;