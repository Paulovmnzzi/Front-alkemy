import { superiorTypes } from './../types/superiorTypes';
import { fetchSearch } from './../../helper/fetch';

export const listarParaAgregar = (category) => {
    return async(dispatch) => {

        var categoryAux = '';
        
        if (category === 'personajes') {
            categoryAux = 'casas'
        } else if (category === 'casas') {
            categoryAux = 'reinos'
        } else {
            categoryAux = category;
        }
        const resp = await fetchSearch(`${categoryAux}/listar`);
        const body = await resp.json();
        
        dispatch(addResultSearch(body));
        
    }
}


const addResultSearch = (body) => ({
    type: superiorTypes.agregarSuperior,
    payload: body
})