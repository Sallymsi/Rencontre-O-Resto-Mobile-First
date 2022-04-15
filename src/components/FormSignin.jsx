import React from 'react';
import '../styles/main.scss';
import { useState } from 'react';
import { signin } from '../js/fetch'

const FormSignin = () => {
    const [firstInputValue, setFirstInputValue] = useState('')
    const [lastInputValue, setLastInputValue] = useState('')
    const [emailInputValue, setEmailInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
    const [repeatInputValue, setRepeatInputValue] = useState('');

    const handleClick = (e) => {
        const form = new FormData();
        form.set('prenom', firstInputValue);
        form.set('nom', lastInputValue);
        form.set('email', emailInputValue);
        form.set('password', passwordInputValue);
        form.set('image', repeatInputValue);
        e.preventDefault();

        const options = {
            method: "POST",
            body: form
        };
        signin(options);
    }


    return (
        <div>
            <form method="post" className='form'>
                <div className='inputDiv'>
                    <label for="firstName">Prénom</label><br></br>
                    <input type="text" name="firstName" id="firstName" aria-required="true" value={firstInputValue} onChange={(e) => setFirstInputValue(e.target.value)} required/>
                </div>
                <div className='inputDiv'>
                    <label for="lastName">Nom</label><br></br>
                    <input type="text" name="lasttName" id="lastName" aria-required="true" value={lastInputValue} onChange={(e) => setLastInputValue(e.target.value)} required/>
                </div>
                <div className='inputDiv'>
                    <label for="email">Email</label><br></br>
                    <input type="text" name="email" id="email" aria-required="true" value={emailInputValue} onChange={(e) => setEmailInputValue(e.target.value)} required/>
                </div>
                <div className='inputDiv'>
                    <label for="password">Mot de passe</label><br></br>
                    <input type="password" name="password" id="password" aria-required="true" value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)} required/>
                </div>
                <div className='inputDiv'>
                    <label for="repeatPassword">Répéter le mot de passe</label><br></br>
                    <input type="password" name="repeatPassword" id="repeatPassword" aria-required="true" onChange={(e) => setRepeatInputValue(e.target.value)} required/>
                </div>
                <div className='button'>
                    <input type="submit" value="C'est parti !" className='connexion' onClick={handleClick} />  
                </div>  
            </form>
        </div>
    );
}

export default FormSignin