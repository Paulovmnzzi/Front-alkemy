import React from 'react'
import Form from '../Components/Form';
import Navbar from '../Components/Navbar';

const FormPage = () => {
    return (
        <div className='container-busqueda'>
            <Navbar />

            <div className='row d-flex justify-content-center mt-5 pt-5'>
                <div className='col-12 col-xl-9'>
                    <Form />
                </div>
            </div>

        </div>
    )
}

export default FormPage
