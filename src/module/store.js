import { createStore } from "redux";
import rootReducer from './rootReducer';

// Create the store which holds the state of the app 
export default createStore(rootReducer);
