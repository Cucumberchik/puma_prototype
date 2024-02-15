import { useEffect, useState } from "react"
import Range from "./range"
import { useAdmin } from "../../context/admins"
import { kidsApi, menApi, womenApi } from "../../APIs/APIs"
import axios from "axios"

export default function Home() {
    const [menData, setMenData] = useState([])
    const [womenData, setWomenData] = useState([])
    const [kidsData, setKidsData] = useState([])
    function readData() {
        axios(menApi).then(men => setMenData(men.data))
        axios(womenApi).then(women => setWomenData(women.data))
        axios(kidsApi).then(kids => setKidsData(kids.data))
    }
    useEffect(() => { readData() }, [])
    let [status, setStatus] = useState(true)
    return (
        <div className="home">
            <div className="home_wellcoms_title d-f ">
                <div className="home_title_img w">
                    <img className="w i" src="https://nztcdn.com/files/d21b081b-3004-46f0-a78d-73d510be91de.webp" alt="" />
                </div>
                <div className="home_title d-f-f d-f">
                    <h1>30% OFF ORDERS $125+</h1>
                    <h2>TREAT YOURSELF TO SOMETHING SWEET WITH CODE LOVE30</h2>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <Range type={menData} status={status} setStatus={setStatus} />
            <div className="home_wellcoms_title d-f">
                <div className="home_title_img w">
                    <img className="w i" src="https://cdn.sanity.io/images/qa41whrn/staging/35e9ec971020313fdc7ad699cd6bc766d7fc56cc-1440x500.jpg" alt="" />
                </div>
                <div className="home_title_ d-f-f d-f">
                    <h1>FULL COURT ‘FIT</h1>
                    <h2>CLASSICS ALWAYS IN STYLE</h2>
                </div>
            </div>
            <Range type={womenData} status={status} setStatus={setStatus} />
            <div className="home_wellcoms_title d-f">
                <div className="home_title_img w">
                    <img className="w i" src="https://nztcdn.com/files/27d86dab-d9ff-4687-bb2e-53a30b8f1d91.webp" alt="" />
                </div>
                <div className="home_title_ d-f-f d-f">
                    <h1>MB.01 IRIDESCENT</h1>
                    <h2>BY LAMELO BALL</h2>
                </div>
            </div>
            <Range type={kidsData} status={status} setStatus={setStatus} />
        </div>
    )
}