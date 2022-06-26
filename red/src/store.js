import {createStore} from 'redux';
import rootReducer from './action /rootReducer';


const store = createStore(rootReducer);

export default store
