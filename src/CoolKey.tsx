import { Routes } from "react-router"
import { Landing } from "./routes/Landing"
import { Route } from "react-router"
import { Productos } from "./routes/Productos"
import { PaginaError } from "./routes/PaginaError"
import { MainLayout } from "./layout/MainLayout"

export const CoolKey = () => {
    return (
        <>
        <Routes>
            <Route element={ <MainLayout/> }>
                <Route path="/" element={ <Landing/> }></Route>
                <Route path="/productos" element={ <Productos/> }></Route>
            </Route>
            <Route path="*" element={ <PaginaError/> }></Route>
        </Routes>
        </>
    )
}