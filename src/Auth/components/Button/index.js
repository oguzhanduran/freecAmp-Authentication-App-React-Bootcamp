import React from 'react'
import "./index.css"

function Button(props) {

    const { buttonName, onClick } = props // LoginForm ve Registration componentinde kullanmak üzere propslarımızı tanımladık.
    return (
        <div>
        <button onClick={onClick} className='button'>{buttonName}</button> {/*Type button ise onClick, submit ise form olarak tanımlayıp içinde onSubmit diye bir callback vermeliyiz. */}
        </div>
    )
}

export default Button
   