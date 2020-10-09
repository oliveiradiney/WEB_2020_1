import React,{Component} from 'react'
import Card from './Card'
import {connect} from 'react-redux'

class Multiplication extends Component{
    render(){
        const multiplicacao = this.props.n1 * this.props.n2
        return(
            <Card title='Multiplicação' blue2>
                {multiplicacao}
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        n1: state.Numbers.n1,
        n2: state.Numbers.n2
    }
}

export default connect(mapStateToProps)(Multiplication)