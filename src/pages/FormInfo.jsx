import React from 'react';
import FormGender from '../components/FormGender';
import '../styles/main.scss'

function FormInfo() {
    return (
        <div className='formInfo'>
            <div>
                <p>Afin de mieux</p>
                <p>vous connaître...</p>
            </div>
            <FormGender />
        </div>
    )
}

    

export default FormInfo