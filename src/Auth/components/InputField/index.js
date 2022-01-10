import React from 'react'
import "./index.css"

function InputField(props) {

    /*Biz aşağıda değişken olan değerleri (type, placeholder, label) destructuring yöntemiyle propstan alıp farklı componentlerde farklı isim ve şekillerle kullanmak adına düzenledik */

     const { label, type, placeholder, value, onChange} = props

    return (
        <div className='field-container'> {/*Bu yapıyı her yerde kullanabiliriz sadece InputField içinde değil*/}
            <span className='field-title'>{label}</span>
            <div>
                <input value={value} onChange={onChange} className='field-input' type={type} placeholder={placeholder} />
                {type ==="password" && <span className='field-password'>Forgot Password?</span>}
            </div>
        </div>
    )
}

export default InputField
        

/* { type === "password" && <span className=''>Forgot Password?</span>} type'ı dışardan aldığımız için type password ise span kısmını DOM'a ekle diyebiliriz type değişirse bu kısım DOM'dan çıkarılacak.*/


    
      
      
      
