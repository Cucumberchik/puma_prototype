import { createContext, useContext, useState } from "react";

//==========API============
import { newsApi, adminPass } from "../APIs/APIs";
import axios from "axios";


let contextPuma = createContext()
export const usePuma = () => useContext(contextPuma)

export default function ContextPuma({ children }) {
    let [ind, setInd] = useState(0)
    let [news, setNews] = useState([])
    let [adminpass, setAdminPass] = useState([])
    const [newPass, setNewPass] = useState('')

    async function readNews() {
        await axios(newsApi).then(news => setNews(news.data))

    }

    async function checkPassAdmin() {
        await axios(adminPass).then(pass => setAdminPass(pass.data[0]))
    }
    async function changePassAdmin() {
        let obj = {
            pass: newPass
        }
        await axios.delete(`${adminPass}/${adminpass.id}`)
        await axios.post(adminPass, obj)
        checkPassAdmin()    
    }
    
    function readId() {

        const intervalId = setInterval(() => {
            setInd(ind => (ind == 1 ? 0 : ind + 1));
        }, 4000);

        return () => clearInterval(intervalId);
    }


    let values = { changePassAdmin, setNewPass, newPass, readNews, adminpass, ind, news, readId, checkPassAdmin }
    return <contextPuma.Provider value={values}>{children}</contextPuma.Provider>
}