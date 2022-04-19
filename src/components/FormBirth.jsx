import React from 'react';
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
//import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


function FormBirth({setIsBirth},{setBirthInputValue}) {

    return (
        <div>
            <div className='blockFormInfo'>
                <form method="post" className='form'>
                    <div className='inputDiv'>
                        <label for="SelectBirth">Quel est votre date de naissance ?</label><br></br>
                        <input type="date" id="selectBirth" name="bird" value="1998-01-01" className='inputBirth' onChange={(e) => setBirthInputValue(e.target.value)} required></input>
                    </div>
                    <div className='button'>
                        <button type="submit" value="Suivant" className='connexion' onClick={() => setIsBirth(true)}>Suivant <FontAwesomeIcon size="xs" icon={faChevronRight}/></button>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default FormBirth



// const handleClick = (e) => {
//         e.preventDefault();

//         if (birthInputValue !== '') {
//             const document = {
//                 birth: birthInputValue,
//             };

//             const options = {
//                 method: "POST",
//                 body: JSON.stringify(document),
//                 headers: {"Content-type": "application/json"},
//             };
//         }
//     }