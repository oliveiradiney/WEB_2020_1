import React, {Component} from 'react'
import Card from './Card'
import {connect} from 'react-redux'
class Bigger extends Component{
    theBigger(){
        if(this.props.n1 >= this.props.n2){ 
            return this.props.n1
        }else{
            return this.props.n2
        }
    }
    render(){
        return(
           <Card title='Maior' dark>
               {this.theBigger()}
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

export default connect(mapStateToProps)(Bigger)