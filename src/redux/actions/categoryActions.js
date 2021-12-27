
import { categoryTypes } from './../types/categoryTypes';

export const agregarCategoria = (categoria) => ({
    type: categoryTypes.addCategory,
    payload: categoria
})