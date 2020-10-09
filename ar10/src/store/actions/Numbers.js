import {NEW_N1} from './Types'
import {NEW_N2} from './Types'

export function alterN1(newN1){
    
    return {
        type: NEW_N1,
        payload: newN1
    }//action
}//action creator

export function alterN2(newN2){
    
    return {
        type: NEW_N2,
        payload: newN2
    }//action
}//action creator
