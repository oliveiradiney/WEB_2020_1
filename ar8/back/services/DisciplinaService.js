const DisciplinaModel = require('../models/DisciplinaModel');

class DisciplinaService{
    //req = request(vem do cliente)
    //res = response(vai pro cliente)
    
    //registrar
    static register(req, res){
        DisciplinaModel.create(req.body)
        .then(
            (disciplina) => {
                //201 created
                res.status(201).json(disciplina)
            }
        )
        .catch( 
            (error) => {
                res.status(500).json(error)
                
            }
        )
    }
     //LISTAR
     static list(req, res){
        DisciplinaModel.find()
        .then(
            (disciplinas)=>{
                res.status(201).json(disciplinas)
            }
        )
        .catch( 
            (error) => {
                res.status(500).json(error)
                
            }
        )
    }

    //ATUALIZAR
    static update(req, res){
        DisciplinaModel.findByIdAndUpdate(req.params.id, req.body, {'new':true})
        .then((disciplina)=>{
            res.status(201).json(disciplina)
        })
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    //RETORNA A DISCIPLINA DELETADA
    static delete(req, res){
        DisciplinaModel.findByIdAndRemove(req.params.id)
        .then(
            (disciplina)=>{
                res.status(201).json(disciplina)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )
    }

    //RETORNA UMA DISCIPLINA
    static retrieve(req, res){
        DisciplinaModel.findById(req.params.id)
        .then(
            (disciplina)=>{
                res.status(201).json(disciplina)
            }
        )
        .catch(
            (error)=>{
                res.status(500).json(error)
            }
        )

    }
}
module.exports = DisciplinaService;