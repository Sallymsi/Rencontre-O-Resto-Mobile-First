import React, { useState } from 'react'
import '../styles/main.scss'

function Bio() {
    const [bio, setBio] = useState('');

    return (
        <div className="blockBio">
            <h2>Bio</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed libero dolorum at,
                 tempore ea voluptatibus! Sunt illum delectus magni modi dolores, cum et aliquid.</p>
        </div>
    )
}

export default Bio