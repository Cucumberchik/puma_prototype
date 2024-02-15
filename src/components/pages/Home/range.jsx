import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDetails } from "../../context/detail"

export default function Range({ type, status, setStatus }) {
    if (type.length == 0) {
        type = [{
            id: "328e",
            title: "Suede XL Men's Sneakers",
            price: "85",
            link: [
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395205/15/sv01/fnd/PNA/fmt/png/Suede-XL-Men's-Sneakers",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395205/15/fnd/PNA/fmt/png/Suede-XL-Men's-Sneakers",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395205/15/sv02/fnd/PNA/fmt/png/Suede-XL-Men's-Sneakers",
                "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395205/15/sv03/fnd/PNA/fmt/png/Suede-XL-Men's-Sneakers"
            ],
            description: "This fresh take on the classic Suede draws inspiration from PUMA’s heritage within breakdancing and its",
            style: "395205_15",
            color: "Teak-Deep Forest-PUMA Black"
        }]
    }
    let { setData, setId, setBt } = useDetails()
    
    return (
        <div className="range" style={{ display: status ? "flex" : "none" }}>
            {type.map(el => (
                <Link to={`/shop/${el.id}`}>

                    <div onClick={() => setBt(true)} className="element_title tr-02">
                        <div className="element_link">
                            <img src={el.link[0]} alt="" />
                        </div>
                        <div className="element_titles ">
                            <h3 className="element_name">{el.title.slice(0, 35)}...</h3>
                            <h3 className="element_price">${el.price}</h3>
                        </div>
                    </div>
                </Link>
            ))}


        </div>
    )
}
