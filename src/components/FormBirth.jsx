import React from 'react';
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
//import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


function FormBirth({setIsBirth, setBirthInputValue}) {

    function handleClick() {
        setIsBirth(true);
        console.log('Âge OK !');
    }

    return (
        <div>
            <div className='blockFormInfo'>
                <form method="post" className='form'>
                    <div className='inputDiv'>
                        <label for="SelectBirth">Quel est votre date de naissance ?</label><br></br>
                        <input type="date" id="selectBirth" name="birth" placeholder='1998-01-01' className='inputBirth' onChange={(e) => setBirthInputValue(e.target.value)} required></input>
                    </div>
                    <div className='button'>
                        <button type="button" value="Suivant" className='connexion' onClick={handleClick}>Suivant <FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default FormBirth