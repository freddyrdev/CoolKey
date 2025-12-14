import { Link } from "react-router"
import logoPrincipal from "../assets/logoPrincipal.svg"
import { Boton } from '../utils/Boton';

export const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 left-0 bg-(--fondoGeneral) z-20 p-5">
            <img src={ logoPrincipal } alt="CoolKey" className="w-40 select-none" />
            <nav className="flex gap-10 text-[13px]">
                <Link to="/productos" className="text-(--textoGeneral) font-medium hover:text-(--textoSecundario)">Comprar</Link>
                <Link to="/" className="text-(--textoGeneral) font-medium hover:text-(--textoSecundario)">Inicio</Link>
                <a href="" className="text-(--textoGeneral) font-medium hover:text-(--textoSecundario)">Sobre nosotros</a>
            </nav>
            <Boton path="" mensaje="Contactanos" tipo={false}/>
        </header>
    )
}