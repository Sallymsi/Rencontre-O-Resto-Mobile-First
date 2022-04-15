import React from 'react';
import '../styles/main.scss';

const Button = ({label, onClick, className}) => {
  return (
    <div className='blockButton'>
        <button className={className} onClick={onClick}>{label}</button>
    </div>
  );
}

export default Button;