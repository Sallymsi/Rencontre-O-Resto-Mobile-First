import React, { useState } from 'react'
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'

function Activities({setIsActivities, setActivities}) {
    const [sport, setSport] = useState(false);
    const [resto, setResto] = useState(false);
    const [vin, setVin] = useState(false);

    const document = {
        sport: sport,
        resto: resto,
        vin: vin
    }

    function handleClick() {
        setActivities(document);
        setIsActivities(true);
        console.log('Activités OK !');
    }

    return (
        <div className="blockActivities">
            <h2>Activités</h2>
            <div className='case'>
                {!sport && (
                    <button onClick={() => setSport(true)} className='buttonOff'>Sport</button>
                )}
                {sport && (
                    <button onClick={() => setSport(false)} className='buttonOn'>Sport</button>
                )}
                {!resto && (
                    <button onClick={() => setResto(true)} className='buttonOff'>Resto</button>
                )}
                {resto && (
                    <button onClick={() => setResto(false)} className='buttonOn'>Resto</button>
                )}
                {!vin && (
                    <button onClick={() => setVin(true)} className='buttonOff'>Vin</button>
                )}
                {vin && (
                    <button onClick={() => setVin(false)} className='buttonOn'>Vin</button>
                )}
            </div>
            <div className="button">
                <button type="button" value="Suivant" className='connexion' onClick={handleClick}>Suivant <FontAwesomeIcon size="xs" icon={faChevronRight}/></button>
            </div>
        </div>
    )
}

export default Activities