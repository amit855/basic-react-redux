import { ADD_FRIEND } from './actionTypes';

const initialState = {
    names: [],
}

export const AddFriendReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        
        case ADD_FRIEND:
            return {
                ...state,
                names: payload.name
            };

        default:
            return state;
    }

}