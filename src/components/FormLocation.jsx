import React from 'react'
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'



function FormLocation({setIsLocation, setLocationInputValue, setPostalInputValue}) {

    function handleClick() {
        setIsLocation(true);
        console.log('Location OK !');
    }


    return (
        <div>
            <div className='blockFormInfo'>
                <form method="post" className='form'>
                    <div className='inputDiv'>
                        <label for="location">Votre ville ?</label><br></br>
                        <input type="text" id="location" name="location" placeholder='Paris' className='inputLocation' onChange={(e) => setLocationInputValue(e.target.value)} required></input>
                        <label for="postal">Votre code postal ?</label><br></br>
                        <input type="number" inputmode="numeric" id="postal" name="postal" placeholder='01' className='inputLocation' onChange={(e) => setPostalInputValue(e.target.value)} required></input>
                    </div>
                    <div className='button'>
                        <button type="button" value="Suivant" className='connexion' onClick={handleClick}>Suivant <FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>  
                </form>
            </div>
        </div>
    )
}

export default FormLocation