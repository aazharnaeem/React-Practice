import { actionTypes } from '../constant'
const productsReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.fetchProducts:
            return [...action.payload];
        default:
            return state;
    }
}

const selectedProduct=(state={},action)=>{
    switch(action.type){
        case actionTypes.fetchProduct:
            return {...action.payload}
        case actionTypes.removeProduct:
            return {}
        default:
            return state
    }
}

export {productsReducer, selectedProduct}