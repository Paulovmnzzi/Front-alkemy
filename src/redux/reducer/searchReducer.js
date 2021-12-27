
import { searchTypes } from './../types/searchTypes';


const initialState = {
    listado: []
}

export const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case searchTypes.addResultSearch:
            return {
                ...state,
                listado: action.payload
            }
        default:
            return state;
    }

}

