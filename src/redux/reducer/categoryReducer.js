import { categoryTypes } from "../types/categoryTypes";


const initialState = {
    category: null
}

export const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case categoryTypes.addCategory:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }

}