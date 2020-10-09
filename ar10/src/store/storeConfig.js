import { createStore, combineReducers} from 'redux'
import NumbersReducer from './reducers/Numbers'
const reducers = combineReducers({
    Numbers: NumbersReducer
  
})

function StoreConfig() {
    return createStore(reducers)
}

export default StoreConfig
