import { Link } from "react-router"

type BotonProps = {
    path: string;
    mensaje: string;
    tipo: boolean;
}

export const Boton = ({ path, mensaje, tipo }: BotonProps) => {
    return (
        tipo ? <Link to={ path } className="bg-(--fondoBoton) text-(--textoBoton) py-2 px-4 text-[13px] font-medium hover:shadow-[5px_5px_0_0_#0005] cursor-pointer transition-all ease-in duration-200">{ mensaje }</Link> : 

        <a href={ path } className="bg-(--fondoBoton) text-(--textoBoton) py-2 px-4 text-[13px] font-medium hover:shadow-[5px_5px_0_0_#0005] cursor-pointer transition-all ease-in duration-200">{ mensaje }</a>
    )
}