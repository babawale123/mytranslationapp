import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { translateReducer } from './reducer/translateReducer';


const reducers = combineReducers({
    //all reducers
    translate:translateReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store