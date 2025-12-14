import { Boton } from '../utils/Boton';

export const PaginaError = () => {
    return (
        <main className="h-screen flex justify-center items-center flex-col gap-4">
            <h1 className="text-9xl font-medium text-(--textoGeneral)">404</h1>
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-medium text-center text-(--textoGeneral)">Oops... Pagina no encontrada!</h2>
                <p className="w-90 text-center text-(--textoSecundario)">
                    Parece que haz accedido a una pagina incorrecta o desabilitada. ¿Que te parece si regresamos?
                </p>
            </div>
            <Boton path="/" mensaje="Ir al inicio" tipo/>
        </main>
    )
}