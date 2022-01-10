import React from 'react'
import "./index.css"
// import {HiArrowUp} from "react-icons/hi"
import {useHistory} from "react-router-dom" // useHistory önceki olduğun sayfadaki bilgileri alacak ve pushlayıp bu hook'tan bir method çağırırsan dilediğin sayfaya yönlendirecek.

function LandingPage() {

    let history = useHistory() // ne zaman sayfamızı farklı bir sayfaya yönlendirmek istesek veya değiştirmek istesek tek yapmamız gereken history.push("/profile") demek burda profile kısmı yönledirmek istediğimiz sayfa.

    const redirectLandingButton = (() => {
        history.push("/loginform")
    })

    return (
        <div>
            <div className='picture'>
           
            </div>
            <div className='home-container'>
                <h1 className='hello'> Hello </h1>   
                
                <p className='paragraph'> I hope everyone is safe and sound.
                    I designed different type of lending pages,application. it can help others to develop more ideas from this. I keep it simple and minimal. It can also help you find different options in exploring and improving your skills. 
                    <br /><br />
                    I am available for new projects. I hope you show me your support 
                    <br /><br />
                    I wish you luck, <br />
                    Drax</p>

                    
                    {/* <HiArrowUp className='arrow'/> */}
                    
                    <button className='buttonLanding' onClick={redirectLandingButton} >Buy me a Coffee</button>
           </div>
        </div>
    )
}

export default LandingPage
