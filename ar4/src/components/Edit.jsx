import  React, { Component } from 'react'
import axios from 'axios'
export default class Edit extends Component{
    constructor(props){
        super(props)
        this.state = {nome:'', curso:'', capacidade:''}

        this.setNome =  this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setCapacidade = this.setCapacidade.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }

    componentDidMount(){
       axios.get('http://localhost:3001/disciplinas/'+this.props.match.params.id)
       .then((res)=>{
            this.setState({
                nome:res.data.nome,
                curso:res.data.curso,
                capacidade:res.data.capacidade
            })
       })
       .catch(error=>console.log(error))
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
        
        const disciplinaEditada = {nome:this.state.nome, curso:this.state.curso, capacidade:this.state.capacidade}

        axios.put('http://localhost:3001/disciplinas/'+this.props.match.params.id,
            disciplinaEditada)
        .then(
            (res)=>{
                this.props.history.push('/list')
            }
        )
        .catch(error=>console.log(error))
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Editar Disciplina</h3>
                <form onSubmit={this.onSubmit}>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label>Nome: </label>
                        <input type='text' className='form-control' placeholder='Disciplina' value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className='form-group col-md-6'>
                        <label>Curso: </label>
                        <input type='text' className='form-control' placeholder='Curso' value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className='form-group col-md-12'>
                        <label>Capacidade: </label>
                        <input type='text' className='form-control' placeholder='Capacidade' value={this.state.capacidade} onChange={this.setCapacidade}/>
                    </div>
                    <div className='form-group col'>
                        <input type='submit' value='Editar disciplina' className='btn btn-info' />
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}