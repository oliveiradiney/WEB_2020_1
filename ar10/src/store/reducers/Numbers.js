import {NEW_N1} from '../actions/Types'
import {NEW_N2} from '../actions/Types'


const initialState = {
    n1:2,
    n2:6
}

export default function(state = initialState, action){

    switch(action.type){
        case NEW_N1:
            return {
                ...state,
                n1: action.payload
            }
        case NEW_N2:
            return {
                ...state,
                n2: action.payload
            }
        default:
            return state
    }
}