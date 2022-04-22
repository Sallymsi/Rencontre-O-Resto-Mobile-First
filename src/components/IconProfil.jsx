import React, { useState } from 'react'
import '../styles/main.scss'

function IconProfil({image}) {


    return (
        <div className="blockPic">
            <div className="circlePic">
                <img src={image} alt="photo de profil" />
            </div>
        </div>
    )
}

export default IconProfil