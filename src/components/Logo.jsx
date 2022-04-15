import React from 'react';
import '../styles/main.scss';

const Logo = () => {

    let img = require('../assets/Logo1.png');

    return (
        <div className='logo'>
            <img src={img}/>
        </div>
    );
}

export default Logo;