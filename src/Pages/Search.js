import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Buscador from '../Components/Buscador';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import Table from '../Components/Table';

const Search = () => {

    const { category } = useSelector(state => state.category);
    const { listado } = useSelector(state => state.search);

    const [Resultados, setResultados] = useState('');

    useEffect(() => {
        setResultados(listado);

    }, [listado])


    return (
        <div className='container-busqueda'>
            <Navbar />
            <Buscador />

            {category !== 'personajes' && <div className='buscador-cards'>
                {Resultados.length > 1 ? Resultados.map(x => <Card className='buscador-card d-flex justify-content-center' key={x.nombre} listado={x} />) :
                    <Card className='buscador-card d-flex justify-content-center' key={Resultados.nombre} listado={Resultados} />
                }
            </div>}
            
            <div className='row d-flex justify-content-center'>
            <div className='col-12 col-xl-11'>
            <Table category={category} />
            </div>
            </div>

        </div>
    )
}

export default Search;