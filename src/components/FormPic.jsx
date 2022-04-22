import React from 'react';
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'


function FormPic({setIsPic, setPicInputValue}) {

    function handleClick() {
        setIsPic(true);
        console.log('Pic OK !');
    }

    return (
        <div>
            <div className='blockFormInfo'>
                <form method="post" className='form'>
                    <div className='inputDiv'>
                        <label for="pic">Choisissez votre meilleur photo.. </label><br></br>
                        <input type="file" id="pic" name="pic" className='inputPic' onChange={(e) => setPicInputValue(e.target.files[0])} required></input>
                    </div>
                    <div className='button'>
                        <button type="button" value="Suivant" className='connexion' onClick={handleClick}>Suivant <FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default FormPic