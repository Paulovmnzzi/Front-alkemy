import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Table = ({category}) => {

    const { listado } = useSelector(state => state.search);

    const [resultados, setResultados] = useState('');

    useEffect(() => {
        setResultados(listado);

    }, [listado])

    const handleEdit = (nombre) => {
        console.log(nombre)
    }

    return (
        <div>
            {category === 'personajes' && 
                <table className="table table-dark table-striped table-hover  ">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Historia</th>
                            <th scope="col">Casa</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultados?.length > 1 ? resultados.map(x => (
                            <tr key={x.nombre}> 
                                <td> {x.nombre} </td>
                                <td> {x.edad}</td>
                                <td> {x.historia} </td>
                                <td> {x.casa?.nombre} </td>
                                <td> <button onClick={() => handleEdit(x.nombre)}> Editar </button> </td>
                                <td> <button onClick={() => handleEdit(x.nombre)}> Eliminar </button> </td>
                            </tr>
                        )) :(
                            <tr>
                                <td> {resultados[0]?.nombre} </td>
                                <td> {resultados[0]?.edad}</td>
                                <td> {resultados[0]?.historia} </td>
                                <td> {resultados[0]?.casa?.nombre} </td>
                                <td> <button onClick={() => handleEdit(resultados[0].nombre)}> Editar </button> </td>
                                <td> <button onClick={() => handleEdit(resultados[0].nombre)}> Eliminar </button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Table;
