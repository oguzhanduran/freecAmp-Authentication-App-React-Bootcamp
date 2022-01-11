import React from 'react'
import "./index.css"

function HomePage() {
    return (
        <div>
            <h1 className='homePage'>Welcome to freecAmp!</h1>  
            <div className='homePageBackground'>
                <img className='homePagePhoto' src={require("./img/welcometowebsite.png")} alt="homePagePhoto" />
                </div>
        </div>
    )
}

export default HomePage
