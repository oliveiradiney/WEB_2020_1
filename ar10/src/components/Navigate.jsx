import React,{Component} from 'react'
import '../App.css'
import Card from './Card'
import {connect} from 'react-redux'
import  { alterN1, alterN2 } from '../store/actions/Numbers'
class Navigate extends Component{
    next() {
        const newNumber = (this.props.n1 + 1 > 1000) ? this.props.n1 : this.props.n1 + 1
        this.props.alterNumbers(newNumber,true)
        
    }

    prev() {
        const newNumber = (this.props.n1 - 1 < 1) ? this.props.n1 : this.props.n1 - 1
        this.props.alterNumbers(newNumber,true)
    }

    sum10(){
        const newNumber = (this.props.n1 + 10 > 1000) ? 1000 : this.props.n1 + 10
        this.props.alterNumbers(newNumber,true)
    }

    sub10() {
        const newNumber = (this.props.n1 - 10 < 1) ? 1 : this.props.n1 - 10
        this.props.alterNumbers(newNumber,true)
    }

    next_2() {
        const newNumber = (this.props.n2 + 1 > 1000) ? this.props.n2 : this.props.n2 + 1
        this.props.alterNumbers(newNumber,false)
        
    }

    prev_2() {
        const newNumber = (this.props.n2 - 1 < 1) ? this.props.n2 : this.props.n2 - 1
        this.props.alterNumbers(newNumber,false)
    }

    sum10_2(){
        const newNumber = (this.props.n2 + 10 > 1000) ? 1000 : this.props.n2 + 10
        this.props.alterNumbers(newNumber,false)
    }

    sub10_2() {
        const newNumber = (this.props.n2 - 10 < 1) ? 1 : this.props.n2 - 10
        this.props.alterNumbers(newNumber,false)
    }
    render(){
       return(
           <div className='line'>
               <Card title='Número 1' blue>
                    <button
                      className='btn btn-secondary' onClick={() => this.sub10()}>
                      -10
                    </button>
                    <button
                    className='btn btn-secondary' onClick={() => this.prev()}>
                      Anterior
                    </button>
                    <button
                      className='btn btn-secondary' onClick={() => this.next()}>
                        Próximo
                    </button>
                    <button
                      className='btn btn-secondary' onClick={() => this.sum10()}>
                      +10
                    </button>
                    <input value={this.props.n1} readOnly/>
                </Card>

                <Card title='Número 2' red>
                    <button
                      className='btn btn-secondary' onClick={() => this.sub10_2()}>
                      -10
                    </button>
                    <button
                    className='btn btn-secondary' onClick={() => this.prev_2()}>
                      Anterior
                    </button>
                    <button
                      className='btn btn-secondary' onClick={() => this.next_2()}>
                        Próximo
                    </button>
                    <button
                      className='btn btn-secondary' onClick={() => this.sum10_2()}>
                      +10
                    </button>
                    <input value={this.props.n2} readOnly/>
                </Card>
           </div>
       )
    }
}

function mapStateToProps(state){
    return{
        n1: state.Numbers.n1,
        n2: state.Numbers.n2
    }
}

function mapActionCreatorToProps(dispatch){
    return {
        alterNumbers(novoN, n1){
            if(n1===true){
              const action = alterN1(novoN)
              dispatch(action)
            }else{
              const action = alterN2(novoN)
              dispatch(action)
            }
           
        }
    }
}
export default connect(mapStateToProps,mapActionCreatorToProps)(Navigate)