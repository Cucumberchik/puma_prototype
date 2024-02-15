
import "../Style/style.css"
//=========--Admin Components--======
import CheckPasswordAdmin from "./check_pass_admin/pass_check";
//===========--Icon--===========
import 'boxicons'
//=========--Hook--=============
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePuma } from "../../context/context";
import ChangePass from "./check_pass_admin/change_pass";
export default function Header() {
    let session = JSON.parse(localStorage.getItem('session_admin')) || ""
    let navigate = useNavigate()
    let { readNews, adminpass, ind, news, readId, checkPassAdmin } = usePuma()

    let [stateWindow, setStateWindow] = useState(false)
    let [pagesAdmin, setPagesAdmin] = useState(false)
    useEffect(() => { readNews() }, [])
    useEffect(() => { readId() }, [])
    useEffect(() => { checkPassAdmin() }, [])
    function windowCheck() {
        if (session === "true") {
            navigate('/admin')
        } else {
            setStateWindow(true)
        }
    }
    let new2 = news.length == 0 ? "FREE SHIPPING ON ORDERS OVER $60" : news[0].title
    let new1 = news.length == 0 ? "FREE AND EASY RETURNS" : news[1].title

    return (
        <div className="header w d-f-f">
            <div className="news w d-f">
                <h3 className="enter">{ind == 0 ? new1 : new2}</h3>
            </div>

            <div className="container w">
                <div className="header_navigate d-f-a w">
                    <svg className="c-p" onClick={() => navigate('/')} viewBox="0 0 41 32" fill="#fff" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><path d="M4.152.226c-.226 0-.496.948-.993 1.444-.406.406-.812.406-1.038.812-.181.181-.09.496-.181.722-.226.542-.993.632-.993 1.219 0 .632.587.812 1.128 1.219.406.406.496.632.993.812.406.181 1.038-.316 1.625-.181.406.181.903.226.993.722s0 1.128-.587 1.038c-.181 0-.993-.316-2.031-.181C1.849 8.033.45 8.394.315 9.793c-.09.812.903 1.67 1.805 1.444.632-.09.316-.903.632-1.219.496-.496 3.024 1.625 5.371 1.625.993 0 1.715-.226 2.527-1.038.09-.09.181-.181.226-.181.09 0 .226.09.316.181 1.941 1.535 3.34 4.649 10.381 4.649.993 0 2.121.496 3.024 1.354.812.722 1.309 1.941 1.805 3.114.722 1.76 1.941 3.52 3.882 5.461.09.09 1.715 1.354 1.805 1.444 0 0 .181.316.09.406 0 1.219-.226 4.559 2.257 4.739.632 0 .496-.406.496-.722 0-.542-.09-1.219.181-1.76.406-.812-.903-1.219-.903-2.979 0-1.354-1.038-1.128-1.625-2.166-.316-.542-.632-.903-.587-1.58.181-4.107-.903-6.725-1.399-7.357-.406-.496-.722-.722-.316-.948 2.121-1.354 2.618-2.708 2.618-2.708 1.128-2.663 2.121-5.055 3.475-6.093.316-.226.993-.722 1.444-.948 1.309-.632 1.941-.948 2.347-1.354.587-.542 1.038-1.76.496-2.482-.722-.903-1.941-.181-2.528.181-3.882 2.302-4.468 6.319-5.777 8.666-1.038 1.851-2.753 3.204-4.378 3.385-1.128.09-2.437-.181-3.656-.722-3.069-1.354-4.694-3.024-5.1-3.385-.812-.632-7.131-6.906-12.367-7.131 0 0-.632-1.264-.812-1.264-.406-.09-.722.812-1.038.903C4.872 1.127 4.375.18 4.149.225z"></path></svg>
                    <nav className="d-f-a">
                        <div className="nav_search c-p d-f">
                            <box-icon name='search' color='#ffffff' ></box-icon>
                            <input type="text" placeholder="Search..." />
                        </div>
                        <div onClick={() => navigate('/shop')} className="nav_shop c-p i-n d-f">
                            <box-icon name='store-alt' color='#ffffff' ></box-icon>
                        </div>
                        <div onClick={() => navigate('/likest')} className="nav_heart c-p i-n d-f">
                            <box-icon name='heart' color='#ffffff' ></box-icon>
                        </div>
                        <div onClick={() => navigate('/orders')} className="nav_likest c-p i-n d-f">
                            <box-icon name='basket' type='solid' color='#ffffff' ></box-icon>
                        </div>
                        <div onClick={windowCheck} className="nav_admin c-p i-n d-f">
                            <box-icon name='cart-add' type='solid' color='#ffffff' ></box-icon>
                        </div>
                    </nav>
                </div>
            </div>
            <div style={{
                opacity: stateWindow ? "1" : "0",
                top: stateWindow ? "30px" : "-420px",
                width: "100%",
                padding: stateWindow ? "150px 0px" : "0px",
                backdropFilter: stateWindow ? "blur(5px)" : "blur(0px)"
            }} className="window_check_pass_admin p-a d-f tr-02">
                {pagesAdmin ?
                    <ChangePass setPagesAdmin={setPagesAdmin} adminpass={adminpass} session={session} setStateWindow={setStateWindow} /> :
                    <CheckPasswordAdmin setPagesAdmin={setPagesAdmin} navigate={navigate} session={session} adminpass={adminpass} stateWindow={stateWindow} setStateWindow={setStateWindow} />}

            </div>
        </div >
    )
}