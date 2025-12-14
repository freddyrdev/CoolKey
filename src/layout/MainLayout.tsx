import { Header } from './Header';
import { Outlet } from 'react-router';
import { Footer } from './Footer';
export const MainLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen gap-7">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}