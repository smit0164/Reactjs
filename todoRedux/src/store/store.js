import {createStore} from 'redux'
import todoReducer from '../reducer/todoReducer'
console.log("inside the store")
const store=createStore(todoReducer);
console.log("store",store)
export default store;