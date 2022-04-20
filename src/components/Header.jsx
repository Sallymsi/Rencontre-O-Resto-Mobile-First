import React from 'react'
import '../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid'
import { faGear } from '@fortawesome/free-solid-svg-icons'

function Header({label}) {


    return (
        <header>
            <FontAwesomeIcon size="ls" className='chevron' icon={faChevronLeft}/>
            <h1>{label}</h1>
            <FontAwesomeIcon size="ls" className='setting' icon={faGear}/>
        </header>
    )

}

export default Header