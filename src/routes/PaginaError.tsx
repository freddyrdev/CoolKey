import { Link } from "react-router"

export const PaginaError = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col gap-4">
            <h1 className="text-9xl font-medium text-(--textoGeneral)">404</h1>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium text-center text-(--textoGeneral)">Oops... Pagina no encontrada!</h2>
                <p className="w-90 text-center  text-(--textoSecundario)">
                    Parece que haz accedido a una pagina incorrecta o desabilitada. ¿Que te parece si regresamos?
                </p>
            </div>
            <Link to="/productos">
                <button className="bg-(--fondoBoton) text-(--textoBoton) py-2 px-4 text-[13px] font-medium hover:shadow-[5px_5px_0_0_#0005] cursor-pointer transition-all ease-in duration-200">Ir al inicio</button>
            </Link>
        </div>
    )
}