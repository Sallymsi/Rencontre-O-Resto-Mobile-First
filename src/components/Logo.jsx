import React from 'react';
import '../styles/main.scss';

const Logo = () => {

    let img = require('../assets/Logo1.png');

    return (
        <div className='logo'>
            <img src={img} alt="Logo"/>
        </div>
    );
}

export default Logo;