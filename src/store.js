import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { translateReducer } from './reducer/translateReducer';
import { userLoginReducer } from './reducer/userReducer';


const reducers = combineReducers({
    //all reducers
    translate:translateReducer,
    userLogin:userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null



const initialState = {
    userLogin:{userInfo:userInfoFromStorage}
};

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store