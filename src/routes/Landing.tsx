import CoolKeyLogo from "../assets/CoolKeyLogo.svg"
import mancha from "../assets/Mancha.svg"
import { Boton } from '../utils/Boton';

export const Landing = () => {
    return (
        <main className="flex flex-col gap-40 p-5">
            <section className="flex items-center flex-col relative">
                <img src={ mancha } className="absolute -z-10 top-30 left-35 w-70 select-none" />
                <img src={ mancha } className="absolute -z-10 -top-10 right-55 w-70 rotate-2 select-none" />
                <img src={ CoolKeyLogo } alt="CoolKey logo" className="w-50 select-none" />
                <div className="mb-4">
                    <h1 className="font-borsok text-6xl text-center -translate-y-6">CoolKey</h1>
                    <p className="w-130 text-center text-(--textoSecundario)">CoolKey es el espacio ideal para elegir tu llavero favorito sin gastar de más. ¿Aún no te decides? Dale un vistazo y enamórate de uno.</p>
                </div>
                <Boton path="/productos" mensaje="¡Vamos a comprar!" tipo/>
            </section>

            {/* Seccion de algo que nos hace mas especial que los demas productos */}
            <section className="relative">
                <h2 className="font-borsok text-4xl text-center">¿Que nos hace especiales?</h2>
                <img src={ mancha } className="absolute -z-10 top-70 -left-40 w-70 select-none" />
                <img src={ mancha } className="absolute -z-10 top-0 right-10 w-70 select-none" />
                <div className="grid grid-rows-2 grid-cols-2 gap-5 px-40 py-7">
                    <div className="p-[20px_40px_20px_20px] outline outline-[#0002] rounded-[10px] group hover:outline-none hover:-translate-1 hover:shadow-[2px_2px_10px_0_#0002] transition-all ease-in duration-150 bg-white">
                        <i className="fa-solid fa-cube text-2xl p-2.5 text-[#5992FF] bg-[#5993ff44] rounded-[7px] mb-5 group-hover:text-white group-hover:bg-[#5592FF] group-hover:shadow-[5px_5px_10px_0_#5993ff44] transition-all ease-in duration-150"></i>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-[20px]">Hecho a mano, uno a uno</h3>
                            <p className="text-[14px] text-(--textoGeneral)">Cada llavero se crea cuidadosamente, prestando atención a los detalles para que cada pieza sea única y especial.</p>
                        </div>
                    </div>
                    <div className="p-[20px_40px_20px_20px] outline outline-[#0002] rounded-[10px] group hover:outline-none hover:-translate-1 hover:shadow-[2px_2px_10px_0_#0002] transition-all ease-in duration-150 bg-white">
                        <i className="fa-solid fa-pen-ruler text-2xl p-2.5 text-[#f57f3b] bg-[#f57f3b44] rounded-[7px] mb-5 group-hover:text-white group-hover:bg-[#f57f3b] group-hover:shadow-[5px_5px_10px_0_#f57f3b44] transition-all ease-in duration-150"></i>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-[20px]">Diseños unicos y adorables</h3>
                            <p className="text-[14px] text-(--textoGeneral)">Nuestros llaveros tienen personalidad propia; no encontrarás dos iguales y siempre destacan por su ternura y creatividad.</p>
                        </div>
                    </div>
                    <div className="p-[20px_40px_20px_20px] outline outline-[#0002] rounded-[10px] group hover:outline-none hover:-translate-1 hover:shadow-[2px_2px_10px_0_#0002] transition-all ease-in duration-150 bg-white">
                        <i className="fa-solid fa-star text-2xl p-2.5 text-[#3cb13c] bg-[#3cb13c44] rounded-[7px] mb-5 group-hover:text-white group-hover:bg-[#3cb13c] group-hover:shadow-[5px_5px_10px_0_#3cb13c44] transition-all ease-in duration-150"></i>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-[20px]">Calidad artesanal a precios accesibles</h3>
                            <p className="text-[14px] text-(--textoGeneral)">Queremos que todos puedan disfrutar de productos hechos con dedicación sin tener que gastar demasiado, combinando belleza y practicidad.</p>
                        </div>
                    </div>
                    <div className="p-[20px_40px_20px_20px] outline outline-[#0002] rounded-[10px] group hover:outline-none hover:-translate-1 hover:shadow-[2px_2px_10px_0_#0002] transition-all ease-in duration-150 bg-white">
                        <i className="fa-solid fa-heart text-2xl p-2.5 text-[#f53b3b] bg-[#f53b3b44] rounded-[7px] mb-5 group-hover:text-white group-hover:bg-[#f53b3b] group-hover:shadow-[5px_5px_10px_0_#f53b3b44] transition-all ease-in duration-150"></i>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-[20px]">Hechos con amor y creatividad</h3>
                            <p className="text-[14px] text-(--textoGeneral)">Cada detalle de nuestros llaveros refleja cariño y creatividad, convirtiendo un pequeño accesorio en algo que transmite emoción y estilo.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section></section>
        </main>
    )
}