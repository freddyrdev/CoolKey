import { Routes } from "react-router"
import { Landing } from "./routes/Landing"
import { Route } from "react-router"
import { Productos } from "./routes/Productos"

export const CoolKey = () => {
    return (
        <Routes>
            <Route path="/" element={ <Landing/> }></Route>
            <Route path="/productos" element={ <Productos/> }></Route>
        </Routes>
    )
}