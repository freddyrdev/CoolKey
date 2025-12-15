export const Footer = () => {
    return ( 
        <footer className="flex gap-20 bg-(--fondoFooter) w-full h-65 px-40 py-10">
            <div className="flex flex-col gap-4">
                <h2 className="text-(--textoFooter) font-borsok text-4xl">Coolkey</h2>
                <p className="text-(--textoSecundarioFooter) text-[15px] w-100">Creamos pequeños muñecos de lana y felpa hechos a mano, cuidando cada detalle y apostando por lo simple, lo tierno y lo auténtico.</p>
                <div className="flex gap-5 text-2xl text-(--textoFooter)">
                    <a href="" className="hover:text-blue-500 transition-all ease-in duration-150">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className="hover:text-slate-600 transition-all ease-in duration-150">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="" className="hover:text-slate-500 transition-all ease-in duration-150">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="" className="hover:text-fuchsia-400 transition-all ease-in duration-150">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="flex gap-15">
                <div className="text-(--textoFooter)">
                    <h2 className="font-medium">Emprendimiento</h2>
                    <a href="" className="text-(--textoSecundarioFooter)">Sobre nosotros</a>
                </div>
                <div className="text-(--textoFooter)">
                    <h2 className="font-medium">Contacto</h2>
                    <a href="" className="text-(--textoSecundarioFooter)">coolkey@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}