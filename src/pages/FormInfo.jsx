import React, { useState } from 'react';
import FormGender from '../components/FormGender'
import FormBirth from '../components/FormBirth'
import '../styles/main.scss'

function FormInfo() {
    const [genderInputValue, setGenderInputValue] = useState('')
    const [birthInputValue, setBirthInputValue] = useState('')
    const [isGender, setIsGender] = useState(false);
    const [isBirth, setIsBirth] = useState(false);


    return (
        <div className='formInfo'>
            <div>
                <p>Afin de mieux</p>
                <p>vous connaître...</p>
            </div>
            <div className='BlockForm'>
                {!isGender && (
                    <FormGender setIsGender={setIsGender} setGenderInputValue={setGenderInputValue} />
                )}
                {isGender && !isBirth && (
                    <FormBirth setIsBirth={setIsBirth} setBirthInputValue={setBirthInputValue}/>
                )}
                {isGender && isBirth && (
                    <FormBirth setIsBirth={setIsBirth} />
                )}
            </div>
        </div>
    )
}

    

export default FormInfo