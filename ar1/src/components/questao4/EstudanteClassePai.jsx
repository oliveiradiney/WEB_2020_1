import React, {Component} from 'react'
import Estudante from './EstudanteClasse'
import EstudanteClasse from './EstudanteClasse'

export default class EstudantePai extends Component{
    render(){
        return(
           <div>
               <EstudanteClasse nome='Diney' curso='Sistemas de Informação' cidade='Quixadá'></EstudanteClasse>
           </div>
        )
    }
}