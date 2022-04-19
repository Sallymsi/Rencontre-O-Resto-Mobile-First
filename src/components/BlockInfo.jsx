import React, { useState } from 'react'
import '../styles/main.scss'
import FormGender from './FormGender'
import FormBirth from './FormBirth'

function BlockInfo() {
    const [genderInputValue, setGenderInputValue] = useState('')
    const [birthInputValue, setBirthInputValue] = useState('')
    const [isGender, setIsGender] = useState(false);
    const [isBirth, setIsBirth] = useState(false);

 
    return (
        <div className='BlockForm'>
            {!isGender && (
                <FormGender setIsGender={setIsGender} setGenderInputValue={setGenderInputValue} />
            )}
            {isGender && !isBirth && (
                <FormBirth  setIsBirth={setIsBirth} setBirthInputValue={setBirthInputValue}/>
            )}
            {isGender && isBirth && (
                <FormBirth  setIsBirth={setIsBirth} />
            )}
        </div>
    )
}

    

export default BlockInfo