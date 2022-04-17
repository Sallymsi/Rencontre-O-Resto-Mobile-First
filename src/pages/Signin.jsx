import React from 'react';
import '../styles/main.scss';
import FormSignin from '../components/FormSignin';

function Signin() {

    return (
        <div className='signinPage'>
            <div>
                <p>Rejoignez d'autres</p>
                <p>gourmands</p>
            </div>
            <FormSignin />
        </div>
    );
    
}

export default Signin