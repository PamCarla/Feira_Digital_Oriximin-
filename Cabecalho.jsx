import React from 'react';

function Cabecalho() {
  return (
    <header id="cabecario">
      <div className="header-container">
        <h1>Feira do Produtor de Oriximiná</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#formulario">Formulário</a></li>
            <li><a href="#painel">Painel</a></li>
            <li><a href="#cadastro">Cadastro</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;