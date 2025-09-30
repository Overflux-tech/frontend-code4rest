import { Routes, Route, useLocation } from "react-router-dom";

import Header from '../../component/Header'
import Home from "../home/Home";
import Footer from "../../component/Footer";
import TemplatesPage from "../templatesPage/TemplatesPage";

function AppRoutes() {
    const location = useLocation();
    const hideHeaderOnRoutes = ['/template-page'];
    const showHeader = !hideHeaderOnRoutes.includes(location.pathname);
    
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {showHeader && <Header />}
            <main className="flex-grow bg-[#EAEBEF]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/template-page" element={<TemplatesPage />}></Route>
                </Routes>
            </main>
            {showHeader && <Footer />}
        </div>
    )
}

export default AppRoutes