import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { agregarCategoria } from './../redux/actions/categoryActions';
import { listar } from './../redux/actions/searchActions';
import { listarParaAgregar } from './../redux/actions/superiorActions';

const Navbar = () => {

    const { category } = useSelector(state => state.category);
    const dispatch = useDispatch();

    const handleCategory = (category) => {
        switch (category) {
            case 'personajes':
                dispatch(agregarCategoria('personajes'))
                dispatch(listar(category));
                dispatch(listarParaAgregar(category));
                break;
            case 'casas':
                dispatch(agregarCategoria('casas'));
                dispatch(listar(category));
                dispatch(listarParaAgregar(category));
                break;
            case 'reinos':
                dispatch(agregarCategoria('reinos'));
                dispatch(listar(category));
                dispatch(listarParaAgregar(category));
                break;
            default:
                alert('categoria inexistente');
        }
    }

    return (
        <div>

            <nav className="navbar navbaar navbar-expand-lg navbar-dark ">
                <div className="container-fluid d-flex flex-row justify-content-between">
                        <div>
                            <NavLink to='/' className='navbar-brand' > Inicio </NavLink>
                        </div>
                        <div className='w-50 d-flex justify-content-center me-4 pe-3'>
                            <NavLink to='/search' onClick={() => handleCategory('personajes')} className={category === 'personajes' ? 'navbar-brand navbar-active ' : 'navbar-brand'} href="#"> Personajes </NavLink>
                            <NavLink to='/search' onClick={() => handleCategory('casas')} className={category === 'casas' ? 'navbar-brand navbar-active mx-5' : 'navbar-brand mx-5'} href="#">Casas</NavLink>
                            <NavLink to='/search' onClick={() => handleCategory('reinos')} className={category === 'reinos' ? 'navbar-brand navbar-active ms-3' : 'navbar-brand ms-3'} href="#">Reinos</NavLink>
                        </div>
                        <div>
                            Logout
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            </nav>

        </div>
    )
}

export default Navbar
