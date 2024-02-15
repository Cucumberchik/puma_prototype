import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { usePuma } from "../../../context/context";


export default function ChangePass({ setPagesAdmin, adminpass, session, setStateWindow }) {
    let { setNewPass, newPass, checkPassAdmin, changePassAdmin } = usePuma()
    const [currPass, setCurrPass] = useState('')

    const [blockTime, setBlockTime] = useState(true)
    const [blockNumber, setBlockNumber] = useState(0)
    const [blockTimer, setBlockTimer] = useState(15)

    const [warInt, setWarInt] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            !blockTime &&
                setBlockTimer((blockTimer) => (blockTimer >= 1 ? blockTimer - 1 : 0))

        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [blockTime])
    function checker() {
        if (currPass == adminpass.pass) {

            setStateWindow(false)
            setNewPass("")
            setNewPass("")
            changePassAdmin()
            setPagesAdmin(false)
        } else if (blockNumber == 5) {
            setBlockTime(false)
            setNewPass('')
            setTimeout(() => {
                setBlockTimer(15)
                setBlockTime(true)
            }, 15000)
            setBlockNumber(blockNumber + 1)
        } else if (blockNumber == 10) {
            setBlockTime(false)
            setBlockTimer(120)
            setTimeout(() => {
                setBlockTimer(15)
                setBlockTime(true)
            }, 120000)
        } else if (blockNumber >= 15) {
            setBlockTime(true)
            setBlockTimer(450)
            setTimeout(() => {
                setBlockTimer(15)
                setBlockTime(true)
            }, 450000)
            setBlockNumber(0)
        } else {
            setNewPass('')
            setCurrPass("")
            setWarInt(true)
            setBlockNumber(blockNumber + 1)
            setTimeout(() => { setWarInt(false) }, 200)
            return
        }
    }
    function empty() {

    }
    return (
        <div className="check_pass_admin tr-02">
            <div className="pass_admin_page_btn btn-st">
                <button onClick={() => setPagesAdmin(false)} className="tr-02 d-f"><IoIosArrowBack />Back</button>
            </div>
            <div className="pass_admin_page_value d-f d-f-f btn-st tr-02">
                <h1>Change Password</h1>
                <input className={`${warInt ? "valueisnot " : ""}br-2px-s-bl`} onChange={(e) => setCurrPass(e.target.value)} value={blockTime ? currPass : ""} type="password" placeholder={`${!blockTime ? "Wait " + blockTimer : "current password...."} `} />
                <input className=" br-2px-s-bl" onChange={(e) => setNewPass(e.target.value)} value={blockTime ? newPass : ""} type="text" placeholder="new password" />
                <button onClick={() => blockTime ? checker() : empty()}>Change</button>
            </div>

        </div>
    )
}