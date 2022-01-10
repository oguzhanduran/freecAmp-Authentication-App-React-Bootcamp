import React from 'react'
import "./index.css"

function CampPage() {
    return (
        <div>
            <h1 className='campPage'>Welcome to freecAmp!</h1>  
            <div className='campPageBackground'>
                <img className='campPagePhoto' src={require("./img/welcometowebsite.png")} alt="campPagePhoto" />
                </div>
        </div>
    )
}

export default CampPage
