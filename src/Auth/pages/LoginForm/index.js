import React from 'react'
import "./index.css"
import InputField from "../../components/InputField/index"
import IconField from "../../components/IconField/index";
import Button from "../../components/Button/index"
import {useState, useEffect} from "react"
import { useHistory } from "react-router-dom"


function LoginForm() { 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
    async function login () { // bir promise döneceği için async ve await'i kullandık.
        let item = {email, password}
        let result = await fetch("https://61c458fef1af4a0017d994c8.mockapi.io/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json", // gönderdiğimiz datalar
                "Accept": "application/json" // kabul ettiğimiz datalar.
            }, 
            body: JSON.stringify(item) // göndereceğimiz şeyi mutlaka string'e çevirmeliyiz.
            }) // Bundan sonra gene bir promise dönecek çünkü biz api'ı çağırdığımızda 2 promise döner biri await'i çözer 2. promise stringify formatı çözer 
    
            result = await result.json(); 
            localStorage.setItem("user-info", JSON.stringify(result))
            history.push("/camppage")
    } 
    
    // ilk Api datayı aldı yani email ve password'u ve sonra email ve password'u return etti sonra bu data local storage'da kaydedildi sonrasında login profile'a yönlendirildi. Dropdown kullanıldı kayıt için.

    return (
        <div>
            <div className="">
                <div className='background-color'>
                <img className='loginPageBackground' src={require("./img/loginBackground.png")} alt="logingbackground" />
                </div>
            </div>
            <div className='lf-container'>
                <div className='lf-titles-container'>
                    <h1 className='lf-title-logo'>freecAmp</h1>
                    <h1 className='lf-title-login'>Login</h1>
                </div>
                <div> 
                    <InputField onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="user@gmail.com"/> {/* Burda InputField'da olusturduğumuz propsları isimlendirdik. */}
                    <InputField onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="Password"/>
                    <Button onClick={login} buttonName="Sign in"/>
                </div>
                
                <IconField/>
            </div>
        </div>
       )
   }
   
   export default LoginForm
       
        
        


