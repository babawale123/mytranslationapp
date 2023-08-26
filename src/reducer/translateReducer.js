import { ADD_TRANSLATE_FALIED, ADD_TRANSLATE_REQUEST, ADD_TRANSLATE_SUCCESS } from "../constant/translateConstant";

export const translateReducer = (state={texts:[]},action) => {
    switch (action.type) {
        case ADD_TRANSLATE_REQUEST:
            return {loading:true}
        case ADD_TRANSLATE_SUCCESS:
            return {loading:false, success:true, texts:action.payload}
        case ADD_TRANSLATE_FALIED:
            return {loading:false, success:false, error:action.payload}
        default:
            return state;
    }
}