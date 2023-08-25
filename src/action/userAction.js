import axios from "axios"
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constant/userConstant"

export const userLoginAction = (email,password) => async(dispatch) => {
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const config = {
            headers:{
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8080/api/login',{email,password},config)
        console.log(data)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
        console.log(error)
        dispatch({type:USER_LOGIN_FAILURE,
        payload:error.response && error.response.data.message ? error.response.data.message : error.message})
    }
} 

export const userLogoutAction =()=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
}