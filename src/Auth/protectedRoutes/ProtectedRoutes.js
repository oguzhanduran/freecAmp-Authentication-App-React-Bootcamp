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
            history.push("/loginform")
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

// Kullanıcı giriş yapmadan bazı sayfaları göstermek istemiyorsak o zaman protected routes'u kullanırız. Bunun için küçük bir logic kullanmamız gerekiyor. Yani kullanıcı giriş yaptıktan sonra login ve registration menüyü kullanmıcaz çünkü kullanıcı zaten giriş yaptı. Biz urlden de silmemiz gerekiyor yani giriş yaptıktan sonra kullanıcı gitmek istediği sayfayı manual olarak girebilir o zaman onu da yönlendirmemiz gerekiyor.

// Biz local storagedan veriyi sildiğimizde tekrar register ve login sayfaları görünür ama url kısmına camppage yazdığımızda gene camppage sayfasına gider bunu login sayfasında uyguladığımız gibi useEffect ile önleyebiliriz ama bizim 20 tane sayfamız varsa camppage gibi hepsiyle tek tek uğraşmak mühendislik açısından olumsuz bir durum. İşte biz burada bu yüzden protected routes kullandık. 























