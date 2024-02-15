import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { kidsApi, menApi, womenApi } from "../APIs/APIs";


let DetailsCreateContext = createContext()
export const useDetails = () => useContext(DetailsCreateContext)
export default function DetailsContext({ children }) {

    const [reData, setReData] = useState([])
    let [data, setData] = useState([])
    let [id, setId] = useState([])

    let [arr, setArr] = useState([])

    let [bt, setBt] = useState(false)

    const [menData, setMenData] = useState([])
    const [womenData, setWomenData] = useState([])
    const [kidsData, setKidsData] = useState([])
    async function readDetail() {
        const [menResponse, womenResponse, kidsResponse] = await Promise.all([
            axios(menApi),
            axios(womenApi),
            axios(kidsApi)
        ]);

        setMenData(menResponse.data);
        setWomenData(womenResponse.data);
        setKidsData(kidsResponse.data);

        setArr([...menResponse.data, ...womenResponse.data, ...kidsResponse.data]);

    }


    useEffect(() => {
        setData(arr.filter(el => el.id == id));
    }, [arr, id]);

    let values = { setData, data, setId, readDetail, bt, setBt }
    return <DetailsCreateContext.Provider value={values}>{children}</DetailsCreateContext.Provider>
}