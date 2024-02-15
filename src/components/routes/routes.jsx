import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/home";
import Likest from "../pages/Likest/likest";
import Orders from "../pages/Orders/orders";
import Shop from "../pages/Shope/shope";
import Admin from "../pages/admin/admins";
import Details from "../pages/Details/details";

export default function MainRoute() {
    const mainRout = [
        { path: "/", element: <Home />, key: 1 },
        { path: "/likest", element: <Likest />, key: 2 },
        { path: "/shop", element: <Shop />, key: 5 },
        { path: "/orders", element: <Orders />, key: 3 },
        { path: "/admin", element: <Admin />, key: 4 },
        { path: "/shop/:id", element: <Details />, key: 5 },

    ]
    return (
        <Routes>
            {mainRout.map(el => (
                <Route path={el.path} element={el.element} key={el.key} />
            ))}
        </Routes>
    )

}