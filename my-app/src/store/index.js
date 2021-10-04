import { combineReducers,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import categorie from './categories'
import product from './products'







let reducer = combineReducers({categorie,product});
const categories=()=>{
    return createStore(reducer,composeWithDevTools);

};
export default categories();
