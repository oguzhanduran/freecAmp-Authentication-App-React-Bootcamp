import React from 'react'
import "./index.css"
import ArrowIcon from './SVG/arrowIcon'
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
           <img className='landingPageBackground' src={require("./img/landingPageBackground.png")} alt="landingbackground" />
            </div>
            <div className='home-container'>
                <h1 className='hello'> Hello Camp Lovers! </h1>   
                
                <p className='paragraph'> Find the best campsites for families with our guide to sites that will keep the kids entertained and are suitable for families with children of all ages. We've got campsites with family-friendly activities like water-sports or horse-riding, and sites right next to the beach or in woodland where your kids can roam and learn about nature. If you'd like to find campsites further afield, you can try our french family campsites guide, or if you want something a little more glamorous, have a look at our family glamping guide. 
                    <br /><br />
                   
                    Oguzhan Duran</p>

                    <div>
                        <i  className="arrow">
                            <ArrowIcon/>
                        </i>
                    </div>
                    {/* <HiArrowUp className='arrow'/> */}
                    
                    <button className='buttonLanding' onClick={redirectLandingButton} >make cAmp</button>
           </div>
        </div>
    )
}

export default LandingPage
