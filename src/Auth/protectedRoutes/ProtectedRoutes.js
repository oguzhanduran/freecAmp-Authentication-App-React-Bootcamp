import React from 'react'
// import "./index.css"
// import InputField from "../../components/InputField/index"
// import IconField from "../../components/IconField/index";
// import Button from "../../components/Button/index"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"

function ProtectedRoutes(props) {

    const history = useHistory();
    let Cmp = props.Cmp

    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            history.push("/registration")
        }
    }, [])

    // Burada dedikki eğer kayıt olmamışsa url'ye manual olarak örneğin camppage yazsa bile oraya yönlendirme registration sayfasına yönlendir.

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default ProtectedRoutes

// Biz local storagedan veriyi sildiğimizde tekrar register ve login sayfaları görünür ama url kısmına camppage yazdığımızda gene camppage sayfasına gider bunu login sayfasında uyguladığımız gibi useEffect ile önleyebiliriz ama bizim 20 tane sayfamız varsa camppage gibi hepsiyle tek tek uğraşmak mühendislik açısından olumsuz bir durum. İşte biz burada bu yüzden protected routes kullandık. 























