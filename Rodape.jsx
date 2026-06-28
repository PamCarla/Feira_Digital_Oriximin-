import React from 'react';

function Rodape() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Feira Digital de Oriximiná</h3>
          <p>Av. Castelo Branco, 8000 - Centro.</p>
          <p className="copyright">© 2026 Todos os direitos reservados</p>
        </div>
        <div className="footer-column">
          <h5>Canais Oficiais</h5>
          <nav className="footer-socials">
            <div className="social-item">
              <img src="img/fecebook.png" width="20" alt="Facebook" />
              <a href="#facebook">Facebook</a>
            </div>
            <div className="social-item">
              <img src="img/instagram.jpg" width="20" alt="Instagram" />
              <a href="#Instragam">Instagram</a>
            </div>
            <div className="social-item">
              <img src="img/you tube.png" width="20" alt="You Tube" />
              <a href="#youtube">YouTube</a>
            </div>
          </nav>
        </div>
        <div className="footer-column">
          <h5>Consultas</h5>
          <nav className="footer-links">
            <a href="#Ultimas Noticias">Últimas Notícias</a>
            <a href="#Diario Oficial">Diário Oficial</a>
            <a href="#inicio">Mapa do site</a>
          </nav>
        </div>
        <div className="footer-column contato">
          <h5>Contato</h5>
          <p><strong>Gmail:</strong> feiradigital@gmail.com</p>
          <p><strong>Telefone:</strong> (91) 99093-4870</p>
          <p><strong>WhatsApp:</strong> (91) 99924-4433</p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;