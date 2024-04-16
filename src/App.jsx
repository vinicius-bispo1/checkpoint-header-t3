import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio"
import Sobre from "./pages/sobre/Sobre"
import Projetos from "./pages/projetos/Projetos"
import { GlobalStyle } from "./components/header/styled";


export default function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
