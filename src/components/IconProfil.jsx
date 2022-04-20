import React, { useState } from 'react'
import '../styles/main.scss'

function IconProfil() {
    const [profilPic, setProfilPic] = useState('');

    return (
        <div className="blockPic">
            <div className="circlePic">
                <img src={profilPic} alt="photo de profil" />
            </div>
        </div>
    )
}

export default IconProfil