import React from 'react'
import "./index.css"

function WildCamping() {
    return (
        <div>
           <h1 className='WildCamping'>Wild Camping</h1>
           <div className='wildCampingBackground'>
                <img className='wildCampingPhoto' src={require("./img/wildCamping.png")} alt="wildCampingPhoto" />
                </div>
        </div>
    )
}

export default WildCamping
