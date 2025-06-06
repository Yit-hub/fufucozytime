import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Home }  from './src/Pages/Home';
import { Galeria }  from './src/Pages/Galeria';
import { Menu }  from './src/Pages/Menu';
import { Contacto }  from './src/Pages/Contacto';
import { Encargos } from "./src/Pages/Encargos";
import { Login } from "./src/Pages/Login"
import  FAQPage  from "./src/Pages/FAQs"
import  CookiesPolicy  from "./src/Pages/CookiesPage"



export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <Navigate to = {"/inicio"}/> } />
                <Route path="/inicio" element = {<Home />} />
                <Route path="/galeria" element = {<Galeria />} />
                <Route path="/menu" element = {<Menu />} />
                <Route path="/contacto" element = {<Contacto />} />
                <Route path="/encargos" element = {<Encargos />} />
                <Route path="/login" element = {<Login />} />
                <Route path="/faqs" element = {<FAQPage />} />
                <Route path="/cookies" element = {<CookiesPolicy />} />
                <Route path="*" element = { <Navigate to = {"/404"}/> } />
                <Route path="/404" element = {<h1 className="text-3xl font-bold text-red-500" >Página no encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    )
}