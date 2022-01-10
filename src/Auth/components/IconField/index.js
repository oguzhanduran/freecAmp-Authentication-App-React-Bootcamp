import React from 'react'
import "./index.css"
// import { FcGoogle } from "react-icons/fc"
// import { FaGithub } from "react-icons/fa";
// import { RiFacebookCircleFill } from "react-icons/ri";
import {useHistory} from "react-router-dom"
// Bu sayfada icon kısmını olusturduk.
import GoogleIcon from './SVG/googleIcon';

function IconField() {
    let history = useHistory(); //useHistory hook'unu kullanarak iconların altındaki register for free yazısına tıklayınca kullanıcıyı registration sayfasına yönlendirdik.

    const redirectRegistration = (() => {
        history.push("/registration")
    })
    return (
        <div>
            <span className='If-continue'>or continue with</span>
            {/* <div className='google-rectangle'>
            <FcGoogle className='icons'/>
            </div>
            <div className='github-rectangle'>
             <FaGithub className='icons'/>
            </div>
            <div className='facebook-rectangle'>
             <RiFacebookCircleFill className='facebook-icon'/>
            </div> */}
            <div className='google-rectangle'>
            <i  className="icons">
            <GoogleIcon/>
            </i>
            {/* <FcGoogle className='icons'/> */}
            </div>
            
            <div className='footer'>
            <span className='account'>Don't have an account yet?</span>
            <span className='register' onClick={redirectRegistration}> Register for free</span> 
            </div>
        </div>
         )
}

export default IconField
