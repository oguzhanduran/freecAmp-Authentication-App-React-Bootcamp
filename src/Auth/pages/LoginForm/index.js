import React from 'react'
import "./index.css"
import InputField from "../../components/InputField/index"
import IconField from "../../components/IconField/index";
import Button from "../../components/Button/index"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"


function LoginForm() {

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push("/homepage")
        }
    }, []) // Burada local storage user-info key değerini aldığında sayfayı camppage sayfasına yönlendir dedik. Yani biz bunu yapmasaydık url yerine local3000/login yazsak o sayfa navbarda görünmese bile sayfaya giderdi kullanıcı. Biz login olduktan sonra tekrar login sayfasının gözükmesini istemediğimizden bu şekilde yaptık.

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


  async function login() {

      const response = await fetch("https://61c458fef1af4a0017d994c8.mockapi.io/Auth");
      const data = await response.json();
      let item = { email, password }
      
        for (let i = 0; i < data.length; i++) {
          if (data[i].email == email && data[i].password == password) {
                localStorage.setItem("user-info", JSON.stringify(item))
                window.location.reload();
                history.push("/homepage");
                break;
            }
            else if (data.length === i + 1) {
            alert("Please Check Your Email Adress and Password") 
          }
       }
    }

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
                    <InputField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="user@gmail.com" /> {/* Burda InputField'da olusturduğumuz propsları isimlendirdik. */}
                    <InputField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="Password" />
                    <Button onClick={login} buttonName="Sign in" />
                </div>
                <IconField />
            </div>
        </div>
    )
}

export default LoginForm






