import React from 'react';
import '../styles/main.scss';
import Logo from '../components/Logo';
import Button from '../components/Button';
import FormConnexion from '../components/FormConnexion';

function Connexion() {

    return (
        <div className='mainPage'>
            <Logo />
            <FormConnexion />
            {/* <Button label="C'est parti !" className="connexion" /> */}
        </div>
    );
    
}

export default Connexion