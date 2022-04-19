import React from 'react'
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
//import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


function FormGender({setIsGender},{setGenderInputValue}) {


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
                        <button type="submit" value="Suivant" className='connexion' onClick={() => setIsGender(true)}>Suivant <FontAwesomeIcon size="xs" icon={faChevronRight}/></button>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default FormGender

