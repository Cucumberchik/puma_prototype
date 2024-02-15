import { useState } from "react"
import { useAdmin } from "../../../context/admins"
import { IoIosArrowBack } from "react-icons/io";


export default function AddProduct() {
    let { setTypes, AddProductApi, } = useAdmin()

    let [adding, setAdding] = useState(0)


    let [title, setTitle] = useState('')
    let [price, setPrice] = useState('')
    let [link1, setLink1] = useState('')
    let [link2, setLink2] = useState('')
    let [link3, setLink3] = useState('')
    let [link4, setLink4] = useState('')
    let [description, setDescription] = useState('')
    let [style, setStyle] = useState('')
    let [color, setColor] = useState('')
    let number = price.replace(/[a-zA-Z]/g, '')

    function addProduct() {

        let Obj = {
            title,
            price,
            link: [link1, link2, link3, link4].filter(el => el),
            description,
            style,
            color
        }

        if (!title || !price || !link1 || !description || !style || !color) {
            alert("The field is not filled")
            return
        } else {
            AddProductApi(Obj)
            setTitle("")
            setPrice('')
            setLink1("")
            setLink2("")
            setLink3("")
            setLink4("")
            setDescription("")
            setStyle("")
            setColor("")
            setAdding(0)
        }
    }
    return (
        <div className="add_product w">
            <button className="tr-02 d-f btn-st" onClick={() => setTypes('')}><IoIosArrowBack />Back</button>
            <div className="add_product_inputs g d-f d-f-f">
                <div className="add_product_inputs_page g d-f d-f-f">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Product title.." />
                    <input value={number} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price product.." />
                    <input value={link1} onChange={(e) => setLink1(e.target.value)} type="text" placeholder="Link image.." />
                    <div className="inputs_image d-f-f">

                        <input value={link2} style={{ display: adding >= 1 ? "flex" : 'none' }} onChange={(e) => setLink2(e.target.value)} type="text" placeholder="Link image.." />
                        <input value={link3} style={{ display: adding >= 2 ? "flex" : 'none' }} onChange={(e) => setLink3(e.target.value)} type="text" placeholder="Link image.." />
                        <input value={link4} style={{ display: adding >= 3 ? "flex" : 'none' }} onChange={(e) => setLink4(e.target.value)} type="text" placeholder="Link image.." />

                    </div>
                    <button onClick={() => setAdding(adding + 1)} style={{ display: adding <= 2 ? "flex" : "none" }}>Add more image</button>
                    <button className="d-f" onClick={() => setAdding(adding - 1)} style={{ display: adding > 0 ? "flex" : "none" }}>Put away</button>
                </div>
                <div className="add_product_inputs_page g d-f d-f-f">
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                    <input value={style} onChange={(e) => setStyle(e.target.value)} type="text" placeholder="Style.." />
                    <input value={color} onChange={(e) => setColor(e.target.value)} type="text" placeholder="Color" />
                </div>
                <button onClick={addProduct}>Add</button>
            </div>
        </div>
    )
}