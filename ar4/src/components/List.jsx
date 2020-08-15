import React, {Component} from 'react'
import axios from 'axios'
import TableRow from './TableRow'

export default class List extends Component{
    constructor(props){
        super(props)
        this.state = {disciplinas:[]}
        this.apagarElementoId  = this.apagarElementoId.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3001/disciplinas')
        .then(
            (res)=>{
                this.setState({disciplinas:res.data})
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    
    MountTable(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i)=>{
                return <TableRow disciplinas={disciplina} key={i} apagarElementoId={this.apagarElementoId}/>
            }
        )
    }
    apagarElementoId(id){
        let tempDisciplinas = this.state.disciplinas
        for(let i=0; i < tempDisciplinas.length; i++){
            if(tempDisciplinas[i].id === id){
                tempDisciplinas.splice(i,1)
            }
        }
        this.setState({disciplinas:tempDisciplinas})
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Listar Disciplinas</h3>
                <table className='table table-hover' style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan='2'></th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.MountTable()}
                    </tbody>
                </table>
            </div>
        );
;    }
}