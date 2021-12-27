import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buscarPorCasas, buscarPorNombre } from '../redux/actions/searchActions';
import { buscarPorReinos } from './../redux/actions/searchActions';
import { buscarPorReinosId } from './../helper/searchHelper';
import { useHistory } from 'react-router-dom';

const Buscador = () => {

    const { category } = useSelector(state => state.category);
    const dispatch = useDispatch();
    const history = useHistory();

    const [values, setvalues] = useState({
        value1: '', value2: '', value3: ''
    });

    const [inputValue, SetInputValue] = useState('');
    const [select, setSelect] = useState('nombre');

    useEffect(() => {
        switch (category) {
            case 'personajes':
                setvalues({value1: 'Nombre', value2: 'Casa', value3: 'Reino'})
                break;
            case 'casas':
                setvalues({value1: 'Nombre', value2: 'Reino'});
                break;
            case 'reinos':
                setvalues({value1: 'Nombre'});
                break;
            default:
                break;
        }
    }, [category]);

    const handleInputChange = (e) => {
        SetInputValue(e.target.value);
    }

    const handleSelect = ({target}) => {
        setSelect(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (select) {
            case 'Nombre':
                if(category === 'reinos'){
                    if(inputValue){
                        dispatch(buscarPorNombre(category, buscarPorReinosId(inputValue)));
                        break;
                    }
                }
                dispatch(buscarPorNombre(category, inputValue));
                break;
            case 'Reino':
                if(category && select){
                    dispatch(buscarPorReinos(category, inputValue))
                }
                break;
            case 'Casa':
                dispatch(buscarPorCasas(category, inputValue));
                break;
            default:
                break;
        }
    }

    const handleAdd = () => {
        history.push('/form')
    }

    return (
        <div className='row d-flex justify-content-evenly mt-5'>
            <input className='buscador-input col-12 col-xl-5' value={inputValue} name='busqueda' onChange={handleInputChange} placeholder='Ingrese su busqueda' type='text' />

            <select className="form-select-sm col-12 col-md-6 col-xl-2 buscador-select" aria-label="Default select example" onChange={handleSelect}>
                <option defaultValue='filtrar'> Filtrar por </option>
                <option value={values.value1}>{values.value1}</option>
                {category !== 'reinos' && <option value={values.value2}> {values.value2} </option>}
                {category === 'personajes' && <option value={values.value3}> {values.value3} </option>}
            </select>
           
            <button className='buscador-button col-12 col-md-6 col-xl-2 mb-5' type='submit' name='botonxd' onClick={handleSubmit}>Buscar</button>
            <button className='buscador-button-agregar col-12 col-md-6 col-xl-2 mb-5' type='submit' name='botonxd' onClick={handleAdd}> Agregar </button>

        </div>
    )
}

export default Buscador
