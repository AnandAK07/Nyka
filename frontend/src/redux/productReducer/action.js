import axios from "axios"
import { GET_DATA_FAILURE, GET_DATA_LOADING, GET_DATA_SUCCESS, GET_SINGLE_DATA_FAILURE, GET_SINGLE_DATA_LOADING, GET_SINGLE_DATA_SUCCESS } from "./actionType";

const apiUrl = process.env.REACT_APP_API_URL;

export const getProductRequest = () => {
    return { type: GET_DATA_LOADING }
}

export const getProductSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload: payload }
}

export const getProductFailure = () => {
    return { type: GET_DATA_FAILURE }
}

export const getAllProducts = async (dispatch) => {
    try {
        dispatch({ type: GET_DATA_LOADING })
        const token = localStorage.getItem('e-token')
        console.log(token)
        const data = await axios({
            method: 'get',
            url: `${apiUrl}/api/products`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_DATA_SUCCESS, payload: data.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: GET_DATA_FAILURE })
    }
}

export const getSingleProduct = (id) => async (dispatch) => {
    const token = localStorage.getItem('e-token');
    try {
        dispatch({ type: GET_SINGLE_DATA_LOADING });
        const res = await axios({
            method: 'get',
            url: `${apiUrl}/product/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_SINGLE_DATA_SUCCESS, payload: res.data })
    } catch (error) {
        console.log(error)
        dispatch({ type: GET_SINGLE_DATA_FAILURE })
    }
}
