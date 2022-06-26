import { combineReducers } from 'redux'
import {productsReducer, selectedProduct} from './productReducer'

const rootReducer = combineReducers({
    products:productsReducer,
    product:selectedProduct
});


export default rootReducer;