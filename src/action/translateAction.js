import axios from "axios"
import { ADD_TRANSLATE_FALIED, ADD_TRANSLATE_REQUEST, ADD_TRANSLATE_SUCCESS } from "../constant/translateConstant"

export const translateAction = (source_language,target_language,text) =>async(dispatch) => {
    try {
        dispatch({type:ADD_TRANSLATE_REQUEST})
        const config = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'b913fd172emsh3aaf89d78bcf48dp193478jsn1f12621a4421',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
              },
        }
        const data = await axios.post(`https://text-translator2.p.rapidapi.com/translate`,{source_language,target_language,text},config)
        console.log(data.data.data)
        dispatch({type:ADD_TRANSLATE_SUCCESS,payload:[data.data.data]})
    } catch (error) {
        dispatch({type:ADD_TRANSLATE_FALIED,
        payload:error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}