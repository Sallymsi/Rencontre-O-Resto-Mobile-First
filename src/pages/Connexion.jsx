import React from 'react';
import '../styles/main.scss';
import Logo from '../components/Logo';
import FormConnexion from '../components/FormConnexion';

function Connexion() {

    return (
        <div className='connexionPage'>
            <Logo />
            <FormConnexion />
        </div>
    );
    
}

export default Connexion