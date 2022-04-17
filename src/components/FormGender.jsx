import React from 'react';
import { useState } from 'react'
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function FormGender() {
    const [genderInputValue, setGenderInputValue] = useState('')

    let arrow = <FontAwesomeIcon icon={faArrowRight} />;

    const handleClick = (e) => {
        e.preventDefault();

        if (genderInputValue !== '') {
            const document = {
                genre: genderInputValue,
            };

            const options = {
                method: "POST",
                body: JSON.stringify(document),
                headers: {"Content-type": "application/json"},
            };
        }
    }


    return (
        <div>
            <div className='blockFormInfo'>
                <form method="post" className='form'>
                    <div className='inputDiv'>
                        <label for="gender">Quel est votre genre ?</label><br></br>
                        <select id="selectGender" value="default" name="gender" onChange={(e) => setGenderInputValue(e.target.value)} required>
                            <option value="default">Faîtes votre choix</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                    </div>
                    <div className='button'>
                        <input type="submit" value="Suivant" className='connexion' onClick={handleClick}>{arrow}</input>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default FormGender