import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class TableRow extends Component{
    constructor(props){
        super(props)
        this.apagar = this.apagar.bind(this)
    }
    apagar(){
        axios.delete('http://localhost:3001/disciplinas/'+this.props.disciplinas.id)
        .then((res)=>this.props.apagarElementoId(this.props.disciplinas.id))
        .catch(error=>console.log(error))

    }
    render(){
        return(
            <tr>
                <th>
                    {this.props.disciplinas.id}
                </th>
                <td>
                    {this.props.disciplinas.nome}
                </td>
                <td>
                    {this.props.disciplinas.curso}
                </td>
                <td>
                    {this.props.disciplinas.capacidade}
                </td>
                <td style={{textAlign:'center'}}>
                    <Link  to={'/edit/'+this.props.disciplinas.id} className='btn btn-info'>Editar</Link>
                </td>
                <td style={{textAlign:'center'}}>
                    <button onClick={this.apagar} className='btn btn-danger'>Apagar</button> 
                </td>
            </tr> 
        );
    }
}