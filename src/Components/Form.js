import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Form = () => {

    const {category} = useSelector(state => state.category);
    const {superior} = useSelector(state => state.superior);


    useEffect(() => {
        console.log(superior)
    }, [superior])


    const handleSelect = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="mb-2 form-labels">Nombre</label>
                    <input type="email" autoComplete='off' name='nombre'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="mb-2 form-labels">Historia</label>
                    <input type="text" autoComplete='off' name='historia' className="form-control" id="exampleInputPassword1" />
                </div>
                { category === 'personajes' && <div className="mb-3">
                    <label for="exampleInputPassword1" className="mb-2 form-labels">Edad</label>
                    <input type="text" autoComplete='off' name='edad' className="form-control" id="exampleInputPassword1" />
                </div>}
                { category !== 'reinos' &&
                <>
                <label for="disabledSelect" className="mb-2 form-labels">Pertenece a:</label>
                <select className='form-select' onChange={handleSelect}>
                    {superior.length > 1 && superior.map( x => (
                        <option value={x.id}> {x.nombre} </option>
                    ))}
                </select></>}

                <button type="submit" className="btn btn-primary mt-5">Submit</button>

            </form>
        </div>
    )
}

export default Form
