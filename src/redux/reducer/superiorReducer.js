
import { superiorTypes } from './../types/superiorTypes';


const initialState = {
    superior: {}
}


export const superiorReducer = (state = initialState, action) => {

    switch (action.type) {
        case superiorTypes.agregarSuperior:
            return{
                ...state,
                superior: action.payload
            }
        default:
            return state;
    }

}