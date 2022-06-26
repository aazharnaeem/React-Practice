import http from '../../api';
import { actionTypes } from '../constant';

// const fetch = () => {
//     return async function (dispatch) {
//         const response = await http.get('/product');
//         dispatch({ type: actionTypes.fetchProducts, payload: response })
//     }
// }

const fetchProducts = () => async (dispatch) => {
    const response = await http.get('/products');
    dispatch({
        type: actionTypes.fetchProducts,
        payload: response.data
    })
}

const fetchProduct = (id) => async (dispatch) => {
    const response = await http.get(`/products/${id}`);
    dispatch({
        type: actionTypes.fetchProduct,
        payload: response.data
    })
}

const removeProduct =()=>{
    return{
        type:actionTypes.removeProduct
    }
}

export { fetchProducts , fetchProduct ,removeProduct}