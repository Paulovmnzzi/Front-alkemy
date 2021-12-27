import { fetchSearch } from './../../helper/fetch';
import { searchTypes } from './../types/searchTypes';
import { buscarPorReinosId, casasNombre } from '../../helper/searchHelper';
import Swal from 'sweetalert2';




export const listar = (category) => {
    return async (dispatch) => {

        const resp = await fetchSearch(`${category}/listar`);
        const body = await resp.json();

        dispatch(addResultSearch(body));

    }
}



export const buscarPorNombre = (category, nombre) => {
    return async (dispatch) => {

        var endpoint = null;

        switch (category) {
            case 'personajes':
                endpoint = `${category}/buscar/nombre/${nombre}`
                break;
            case 'casas':
                endpoint = `${category}/buscar/nombre/${casasNombre(nombre)}`
                break;
            case 'reinos':
                endpoint = `${category}/cargar/${nombre}`
                break;
            default:
                endpoint = `${category}/listar`;
                break;
        }
        const resp = await fetchSearch(endpoint);
        const body = await resp.json();

        if (!body.error) {
            dispatch(addResultSearch(body));
            console.log(body)
        } else {
            Swal.fire(
                '',
                body.error,
                'info'
            )
        }

    }
}


export const buscarPorReinos = (category, reino) => {
    return async (dispatch) => {

        var endpoint = null;
        if (category && reino) {

            if (category === 'personajes') {
                endpoint = `${category}/buscar/reino/${buscarPorReinosId(reino)}`
            } else if (category === 'casas') {
                endpoint = `${category}/buscar/reino/${buscarPorReinosId(reino)}`
            }

            const resp = await fetchSearch(endpoint);
            const body = await resp.json();

            if (!body.error) {
                dispatch(addResultSearch(body));
            } else {
                Swal.fire(
                    '',
                    body.error,
                    'info'
                )
            }

        }
    }
}

export const buscarPorCasas = (category, casa) => {
    return async (dispatch) => {

        var endpoint = `${category}/buscar/casa/${casasNombre(casa)}`;
        console.log(casasNombre(casa) + '  lo que me devuelve')

        const resp = await fetchSearch(endpoint);
        const body = await resp.json();

        if (!body.error) {
            dispatch(addResultSearch(body));
        } else {
            Swal.fire(
                '',
                body.error,
                'info'
            )
        }
    }
}

const addResultSearch = (body) => ({
    type: searchTypes.addResultSearch,
    payload: body
})