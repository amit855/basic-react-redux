import { ADD_FRIEND } from './actionTypes';

export const addFriend = (name) => ({
  type: ADD_FRIEND,
  payload: {
    name : name
  }
});