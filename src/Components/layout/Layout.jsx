import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";
import Sidebar from "../LayoutComponents/Sidebar";


export default function Layout() {
    const location = useLocation();
    const hidesSidebar = location.pathname.startsWith('/profile');

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {!hidesSidebar && <Sidebar />}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}