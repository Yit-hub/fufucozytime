import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Home }  from './src/Pages/Home';
import { Galeria }  from './src/Pages/Galeria';


export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <Navigate to = {"/inicio"}/> } />
                <Route path="/inicio" element = {<Home />} />
                <Route path="/galeria" element = {<Galeria />} />
                <Route path="*" element = { <Navigate to = {"/404"}/> } />
                <Route path="/404" element = {<h1>Página no encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    )
}