import React from 'react'
import "./index.css"
import {useHistory} from "react-router-dom"
import GoogleIcon from './SVG/googleIcon';
import GithubIcon from './SVG/githubIcon';
import FacebookIcon from './SVG/facebookIcon';
// Bu sayfada icon kısmını olusturduk.


function IconField() {
    let history = useHistory(); //useHistory hook'unu kullanarak iconların altındaki register for free yazısına tıklayınca kullanıcıyı registration sayfasına yönlendirdik.

    const redirectRegistration = (() => {
        history.push("/registration")
    })
    return (
        <div>
            <span className='If-continue'>or continue with</span>
            <div className='google-rectangle'>
                <i  className="googleIcon">
                <GoogleIcon/>
                </i>
            </div>
            <div className='github-rectangle'>
                <i  className="githubIcon">
                    <GithubIcon/>
                </i>
            </div>
            <div className='facebook-rectangle'>
                <i  className="facebook-icon">
                    <FacebookIcon/>
                </i>
            </div>
            
            <div className='footer'>
            <span className='account'>Don't have an account yet?</span>
            <span className='register' onClick={redirectRegistration}> Register for free</span> 
            </div>
        </div>
         )
}

export default IconField
