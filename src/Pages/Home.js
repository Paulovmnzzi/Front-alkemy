import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { agregarCategoria } from './../redux/actions/categoryActions';
import { listar } from './../redux/actions/searchActions';

const Home = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleCategoria = (tipo) => {
        switch (tipo) {
            case 'personajes':
                history.push('/search');
                dispatch(agregarCategoria('personajes'));
                dispatch(listar(tipo));
                break;
            case 'casas':
                history.push('/search');
                dispatch(agregarCategoria('casas'));
                dispatch(listar(tipo));
                break;
            case 'reinos':
                history.push('/search');
                dispatch(agregarCategoria('reinos'));
                dispatch(listar(tipo));
                break;
            default:
                break;
        }
    }

    return (
        <div className='container-fluid bc-primary vh-100 home-fondo'>
            <div className='row d-flex justify-content-evenly align-items-center vh-100 animate__animated animate__fadeIn'>
                <div className='col-12 col-lg-4 col-xl-3 vh-100 d-flex
                    justify-content-center align-items-center home-pj home-item' onClick={() => handleCategoria('personajes')}>

                    <h1 className='d-flex align-items-start home-text-img'>
                    <span className='home-texto'>Personajes</span>
                    </h1>
                </div>
                <div className='col-12 col-lg-4 col-xl-3 vh-100 d-flex bg-light
                    justify-content-center align-items-center home-casa home-text-img animate__animated animate__fadeIn' onClick={() => handleCategoria('casas')}>

                    <h1 className='d-flex align-items-start home-text-img'>
                    <span className='home-texto'>Casas</span>
                    </h1>
                </div>
                <div className='col-12 col-lg-4 col-xl-3 vh-100  d-flex
                    justify-content-center align-items-center pointer home-reino home-item animate__animated animate__fadeIn' onClick={() => handleCategoria('reinos')}>
                    <h1 className='d-flex align-items-start home-text-img'>
                        <span className='home-texto'>Reinos</span>
                    </h1>
                </div>




            </div>
        </div>
    )
}

export default Home
