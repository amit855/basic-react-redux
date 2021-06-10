import { combineReducers } from "redux";
import { AddFriendReducer } from './addFriend/reducer';

// RootReducer: A place where one can add multiple reducer.
const RootReducer = combineReducers({
    addFriend: AddFriendReducer,
})

export default RootReducer;
