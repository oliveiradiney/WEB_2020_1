var express = require('express')
var router = express.Router();

var DisciplinaService = require('../services/DisciplinaService')

//Listar
router.get('/list',function(req, res, next){
    return res.json(DisciplinaService.list())
})

//Cadastrar
router.post('/register', function(req, res, next){
    res.json(DisciplinaService.register(req.body))
})

//Atualizar
router.put('/update/:id', function(req, res, next){
    const disciplina = DisciplinaService.update(req.params.id, req.body)
    return res.json(disciplina)
})

//Deletar
router.delete('/delete/:id', function(req, res, next){
    const del = DisciplinaService.delete(req.params.id)
    if(del) return res.json({"sucess":true})
    else return res.json({"sucess":false})
})

//Recuperar
router.get('/retrieve/:id', function(req, res, next){
    const disciplina = DisciplinaService.retrieve(req.params.id)
    return res.json(disciplina)
})

module.exports = router