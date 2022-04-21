import React, { useState } from 'react'
import '../styles/main.scss'

function Activities() {
    const [activities, setActivities] = useState('');

    return (
        <div className="blockActivities">
            <h2>Activités</h2>
            <div className='case'>
                <div>Bar</div>
                <div>Resto</div>
                <div>Ciné</div>
            </div>
        </div>
    )
}

export default Activities