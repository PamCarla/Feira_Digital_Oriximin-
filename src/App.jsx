import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Painel from "./pages/Painel";
import Formulario from "./pages/Formulario";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painel" element={<Painel />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
