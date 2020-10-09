import React,{Component} from 'react'
import '../App.css'
import Card from './Card'
import {connect} from 'react-redux'
import  { alterN1, alterN2 } from '../store/actions/Numbers'
class Navigate extends Component{
    render(){
       return(
           <div className='line'>
               <Card title='Número 1' blue>
                    <input value={this.props.n1}/>
                </Card>

                <Card title='Número 2' red>
                    <input value={this.props.n2} />
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