import React, { useState } from 'react'
import '../styles/main.scss'
import Header from '../components/Header'
import IconProfil from '../components/IconProfil'
import Bio from '../components/Bio'
import Activities from '../components/Activities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faLocationDot } from '@fortawesome/fontawesome-free-solid'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Profil() {
    const [FullName, setFullName] = useState('');
    const [location, setLocation] = useState('');


    return (
        <div className="fondProfil">
            <div className='profilPage'>
                <Header label='PROFIL'/>
                <IconProfil />
                <h1>Prénom Nom</h1>
                <h2><FontAwesomeIcon icon={faLocationDot} className='locationDot'/> Location</h2>
                <Bio />
                <Activities />
            </div>
        </div>
    )
}

export default Profil