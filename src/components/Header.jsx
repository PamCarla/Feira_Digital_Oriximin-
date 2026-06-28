import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header id="cabecario">
      <div className="header-container">
        <h1>Feira do Produtor de Oriximiná</h1>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/painel">Painel</Link></li>
            <li><Link to="/formulario">Formulário</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
