import React, {Component} from 'react'
import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ListPage = () =>(
    <FirebaseContext.Consumer>
        { contexto => <List firebase={contexto}/>}
    </FirebaseContext.Consumer>
)

class List extends Component{
    constructor(props){        
        super(props)
        this._isMounted = false
        this.state = {disciplinas:[], loading:false}
       
    }

    componentDidMount(){
        this._isMounted = true
        this.setState({loading:true})

        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (disciplinas)=>{
                if(disciplinas){
                    if(this._isMounted){
                        this.setState({disciplinas:disciplinas, loading:false})
                    }
                }
               
            }
        )
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    MountTable(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i)=>{
                return <TableRow disciplinas={disciplina} 
                        key={i}
                        firebase={this.props.firebase}/>
            }
        )
    }

    gerarConteudo(){
        if(this.state.loading){
            return (
                <tr>
                    <td colSpan='6' style={{textAlign:'center'}}>
                        <div className='spinner-border' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    </td>
                </tr>
            )
        }else return this.MountTable()
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
                            {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        );
;    }
}

export default ListPage