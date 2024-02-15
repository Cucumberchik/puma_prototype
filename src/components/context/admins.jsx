import { createContext, useContext, useState } from "react";
import { menApi, kidsApi, womenApi } from "../APIs/APIs";
import axios from "axios";

const AdminsPanelContext = createContext();
export const useAdmin = () => useContext(AdminsPanelContext);

export default function AdminContext({ children }) {
    const [types, setTypes] = useState('');
    const [data, setData] = useState("")


    async function AddProductApi(Obj) {
        if (types == "Men") {
            await axios.post(menApi, Obj)
        }
        if (types == "Kids") {
            await axios.post(kidsApi, Obj)
        }
        if (types == "Women") {
            await axios.post(womenApi, Obj)
        }

    }

    console.log(data)
    const values = { types, setTypes, AddProductApi, data, setData };
    return <AdminsPanelContext.Provider value={values}>{children}</AdminsPanelContext.Provider>;
}