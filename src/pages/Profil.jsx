import React, { useEffect, useState } from 'react'
import '../styles/main.scss'
import Header from '../components/Header'
import IconProfil from '../components/IconProfil'
import Bio from '../components/Bio'
import { getUser } from '../js/fetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Profil() {
    let userId = sessionStorage.getItem("userId");
    const [infoProfil, setInfoProfil] = useState([]);

    useEffect(() => {
        getUser(userId).then((data) => setInfoProfil(data))
    }, []);


    return (
        <div className="fondProfil">
            <div className='profilPage'>
                <Header label='PROFIL'/>
                <IconProfil image={infoProfil.image}/>
                <h1>{infoProfil.nom} {infoProfil.prenom}</h1>
                <h2><FontAwesomeIcon icon={faLocationDot} className='locationDot'/> {infoProfil.location}, {infoProfil.postal}</h2>
                <Bio />
            </div>
        </div>
    )
}

export default Profil