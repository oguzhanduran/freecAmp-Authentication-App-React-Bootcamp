import React from 'react'
import "./index.css"

function Riverside() {
    return (
        <div>
            <h1 className='Riverside'>Riverside</h1>
            <div className='riversideBackground'>
                <img className='riversidePhoto' src={require("./img/riverside.png")} alt="riversidePhoto" />
                </div>
        </div>
    )
}

export default Riverside
    