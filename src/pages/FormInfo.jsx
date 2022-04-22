import React, { useState } from 'react';
import FormGender from '../components/FormGender'
import FormBirth from '../components/FormBirth'
import '../styles/main.scss'
import FormLocation from '../components/FormLocation'
import FormPic from '../components/FormPic'
import { form } from '../js/fetch'

function FormInfo() {
    const userId = sessionStorage.getItem("userId");
    const [genderInputValue, setGenderInputValue] = useState('')
    const [birthInputValue, setBirthInputValue] = useState('')
    const [locationInputValue, setLocationInputValue] = useState('')
    const [postalInputValue, setPostalInputValue] = useState('')
    const [picInputValue, setPicInputValue] = useState(null)
    const [isGender, setIsGender] = useState(false);
    const [isBirth, setIsBirth] = useState(false);
    const [isLocation, setIsLocation] = useState(false);
    const [isPic, setIsPic] = useState(false);

    if (isGender !== false && isBirth !== false && isLocation !== false && isPic !== false) {

        const document = new FormData();
        document.set('userId', userId);
        document.set('genre', genderInputValue);
        document.set('birth', birthInputValue);
        document.set('location', locationInputValue);
        document.set('postal', postalInputValue);
        document.set('image', picInputValue);
                
        const options = {
            method: "POST",
            body: document
        };
        form(options);
    }


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
                {isGender && isBirth && !isLocation && (
                    <FormLocation setIsLocation={setIsLocation} setLocationInputValue={setLocationInputValue} setPostalInputValue={setPostalInputValue}/>
                )}
                {isLocation && isGender && isBirth && (
                    <FormPic setIsPic={setIsPic} setPicInputValue={setPicInputValue}/>
                )}
            </div>
        </div>
    )
}

    

export default FormInfo