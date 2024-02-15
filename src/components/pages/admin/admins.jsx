import { useState } from "react";
import AddProduct from "./Add_product/add_product";
import { useAdmin } from "../../context/admins";

export default function Admin() {
    let { types, setTypes } = useAdmin()

    return (
        <div className="admin">
            <h1>Admin panel</h1>
            <div className="admin_container" style={{
                display: types ? "none" : "block"
            }}>
                <div className="admin_page">
                    <h2>Add product</h2>
                    <button onClick={() => setTypes("Women")} className="br-2px-s-bl tr-02">Women</button>
                    <button onClick={() => setTypes("Men")} className="br-2px-s-bl tr-02">Men</button>
                    <button onClick={() => setTypes("Kids")} className="br-2px-s-bl tr-02">Kids</button>
                </div>
                <div className="admin_page ">
                    <h2>Change</h2>
                    <button className="br-2px-s-bl tr-02">Change password</button>
                    <button className="br-2px-s-bl tr-02">Change product</button>
                </div>
            </div>
            <div className="get_panel" style={{
                display: types ? "block" : "none"
            }}>
                <AddProduct />
            </div>
        </div>
    );
}