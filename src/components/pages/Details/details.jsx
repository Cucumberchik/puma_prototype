import { useParams } from "react-router-dom"
import { useDetails } from "../../context/detail"
import { useEffect } from "react"

export default function Details() {
    let { data, readDetail, setId, bt, setBt } = useDetails()
    let params = useParams()
    setId(params.id)
    useEffect(() => { readDetail() }, [])
    if (bt) {
        window.scrollTo(0, 0)
        setTimeout(() => { setBt(false) }, 100)
    }
    return (
        <div className="details">
            {data.map(el => (
                <div className="detail_">
                    <div className="detail_images">
                        {el.link.map(e => (
                            <img src={e} alt="" />
                        ))}
                    </div>
                    <div className="detail_title">
                        <h1>{el.title}</h1>
                        <h2>${el.price}</h2>
                        <p>Or 4 payments of ${(el.price / 4) + ''}by <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Afterpay_logo.svg/1280px-Afterpay_logo.svg.png" alt="" /></p>
                    </div>
                    <div className="detail_button">
                        <button>{"heart" ? <box-icon name='heart'></box-icon> : <box-icon name='heart' type='solid' ></box-icon>}</button>
                        <button></button>
                    </div>
                </div>
            ))}

        </div>
    )
}