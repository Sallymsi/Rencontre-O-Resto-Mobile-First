import React from 'react';
import '../styles/main.scss';
import Logo from '../components/Logo';
import Button from '../components/Button';

function MainPage() {

    return (
        <div className='mainPage'>
            <Logo />
            <p>Une rencontre gastronomique, ça vous tente ?</p>
            <div className="blockSignin">
                <Button label="Se connecter" className="connexion" />
                <hr></hr>
                <Button label="S'inscrire" className="signin" />
            </div>
        </div>
    );
    
}

export default MainPage;