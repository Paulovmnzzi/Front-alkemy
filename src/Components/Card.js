import React from 'react'

const Card = ({listado}) => {

    const {historia, edad, nombre} = listado;

    return (
        <div>
            <div className="card" style={{"width": "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title"> {nombre} </h5>
                        {edad && <h6 className="card-title"> {edad} </h6>}
                        { historia && <p className="card-text"> {historia} </p>}
                        {/* <a  className="btn btn-primary">Ver más</a> */}
                    </div>
            </div>
        </div>
    )
}

export default Card
