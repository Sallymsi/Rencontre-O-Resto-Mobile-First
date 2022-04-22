import React from 'react'
import '../styles/main.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid'
import { faGear } from '@fortawesome/free-solid-svg-icons'

function Header({label}) {

    return (
        <header>
            <Link to="/openspace"><FontAwesomeIcon className='chevron' icon={faChevronLeft}/></Link>
            <h1>{label}</h1>
            <Link to="/setting"><FontAwesomeIcon className='setting' icon={faGear}/></Link>
        </header>
    )

}

export default Header