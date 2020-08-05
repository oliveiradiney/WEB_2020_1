import React, {Component} from 'react'
import axios from 'axios'

export default class Create extends Component{
    constructor(props){
        super(props)
        this.state = {nome:'', curso:'', capacidade:''}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
       

    }
    setNome(d){
        this.setState({nome:d.target.value})
    }
    setCurso(d){
        this.setState({curso:d.target.value})
    }
    setCapacidade(d){
        this.setState({capacidade:d.target.value})
    }

    onSubmit(d){
        d.preventDefault()

        const novaDisciplina = {nome:this.state.nome, curso:this.state.curso, 
            capacidade: this.state.capacidade}
        
            axios.post('http://localhost:3001/disciplinas',novaDisciplina)
            .then(
                (res)=>{
                    console.log('Disciplina '+res.data.id+' inserida com sucesso.')
                }
            )
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
         
            this.setState({nome:'', curso:'', capacidade:''})
        }

    
   
    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Criar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label>Nome: </label>
                        <input type='text' className='form-control' value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label>Curso: </label>
                        <input type='text' className='form-control' value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className='form-group col-md-12'>
                        <label>Capacidade: </label>
                        <input type='text' className='form-control' value={this.state.capacidade} onChange={this.setCapacidade}/>
                    </div>
                    <div className='form-group col'>
                        <input type='submit' value='Criar Disciplina' className='btn btn-info' />
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}
