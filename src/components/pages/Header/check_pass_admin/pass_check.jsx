import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { usePuma } from "../../../context/context";
export default function CheckPasswordAdmin({ setPagesAdmin, session, navigate, adminpass, setStateWindow }) {



    const [timerLeft, setTimerLeft] = useState(15)



    let [pass, setPass] = useState('')
    let [errorState, setErrorState] = useState(false)
    let [errorValue, setErrorValue] = useState(false)
    let [errorNumber, setErrorNumber] = useState(1)
    let [errorInput, setErrorInput] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            errorInput &&
                setTimerLeft((timerLeft) => (timerLeft >= 1 ? timerLeft - 1 : 0))

        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [errorInput])

    function checker() {
        if (pass == adminpass.pass) {
            session = 'true'
            localStorage.setItem('session_admin', JSON.stringify(session))
            setPass("")
            setStateWindow(false)
            navigate('/admin')
        } else if (errorNumber == 5) {
            setErrorInput(true)
            setPass('')
            setTimeout(() => {
                setTimerLeft(15)
                setErrorInput(false)
            }, 15000)
            setErrorNumber(errorNumber + 1)
        } else if (errorNumber == 10) {
            setErrorInput(true)
            setTimerLeft(120)
            setTimeout(() => {
                setTimerLeft(15)
                setErrorInput(false)
            }, 120000)
        } else if (errorNumber >= 15) {
            setErrorInput(true)
            setTimerLeft(450)
            setTimeout(() => {
                setTimerLeft(15)
                setErrorInput(false)
            }, 450000)
            setErrorNumber(0)
        } else {
            setPass('')
            setErrorState(true)
            setErrorValue(true)
            setErrorNumber(errorNumber + 1)
            setTimeout(() => { setErrorState(false) }, 3000)
            setTimeout(() => { setErrorValue(false) }, 200)
            return
        }
    }
    function empty() {

    }

    return (
        <div className="check_pass_admin tr-02" >
            <div className="error_check d-f p-a tr-02" style={{
                left: errorState ? "180px" : "-300px",
                opacity: errorState ? "1" : "0"
            }}>
                <h3>Incorrect password</h3>
            </div>
            <div className="pass_admin_page">
                <div className="pass_admin_page_btn btn-st">
                    <button onClick={() => setStateWindow(false)} className="tr-02 d-f "><IoIosArrowBack />Back</button>
                </div>
                <div className="pass_admin_page_value d-f d-f-f btn-st tr-02">
                    <h1>Log in</h1>
                    <input className={`${errorValue ? "valueisnot" : ""} br-2px-s-bl`}
                        value={errorInput ? "" : pass} onChange={(e) => setPass(e.target.value)} type="password"
                        placeholder={`${errorInput ? "Wait " + timerLeft : "Password admin...."} `} />
                    <p onClick={() => setPagesAdmin(true)}>Change password</p>
                    <button onClick={() => errorInput ? empty() : checker()}>Enter</button>
                </div>
            </div>
        </div>
    )
}