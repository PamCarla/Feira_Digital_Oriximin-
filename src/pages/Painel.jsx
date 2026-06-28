import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Painel.css";

import castanha from "../assets/castanha.jpg";
import acerola from "../assets/acerola.webp";
import milho from "../assets/milho.jpg";
import cupuacu from "../assets/cupuacu.jpg";
import galinha from "../assets/galinha.jpeg";
import grafico from "../assets/grafico.jpeg";
import banner from "../assets/banner.png";

function Painel() {
  return (
    <>
      <Header />

      <main>
        <section>
          <img src={banner} alt="Banner da Feira Digital de Oriximiná" width="100%" height="500" style={{ objectFit: "cover" }} />
        </section>

        <section>
          <h2>Conheça a Feira Digital</h2>
          <p>
            Seja bem-vindo à <strong>I Feira Digital de Oriximiná</strong>, um
            espaço virtual criado para valorizar os produtores locais, incentivar
            o empreendedorismo e promover a riqueza cultural, gastronômica e
            artesanal do nosso município.
          </p>
          <p>
            Aqui você encontra produtos regionais, histórias inspiradoras,
            oportunidades de negócios e muito mais. Nossa missão é aproximar
            produtores e consumidores por meio da tecnologia.
          </p>
        </section>

        <section>
          <h2>Destaques da Feira</h2>
          <div className="destaques">
            <article>
              <h3>+100</h3>
              <p>Produtos cadastrados</p>
            </article>
            <article>
              <h3>+50</h3>
              <p>Produtores locais</p>
            </article>
            <article>
              <h3>8</h3>
              <p>Categorias disponíveis</p>
            </article>
          </div>
        </section>

        <section>
          <h2>Categorias em Destaque</h2>
          <article><h3>Artesanato Regional</h3><p>Peças artesanais produzidas por artistas locais.</p></article>
          <article><h3>Medicamentos Fitoterápicos</h3><p>Óleos, xaropes e produtos naturais.</p></article>
          <article><h3>Hortaliças</h3><p>Verduras, legumes e produtos orgânicos.</p></article>
          <article><h3>Farinhas e Derivados da Mandioca</h3><p>Farinha d'água, tapioca, beiju e macaxeira.</p></article>
          <article><h3>Castanha-do-Pará</h3><p>Castanha beneficiada e in natura.</p></article>
          <article><h3>Frutas Regionais</h3><p>Açaí, cupuaçu, bacuri, cajá e outras frutas amazônicas.</p></article>
          <article><h3>Comidas Típicas</h3><p>Tacacá, vatapá, maniçoba e outras delícias regionais.</p></article>
        </section>

        <section>
          <h2>Produtos da Semana</h2>
          <div className="produtos-semana">
            <div className="produto"><img src={castanha} alt="Castanha-do-Pará" /><p>Castanha-do-Pará</p></div>
            <div className="produto"><img src={acerola} alt="Acerola" /><p>Acerola</p></div>
            <div className="produto"><img src={milho} alt="Milho" /><p>Milho</p></div>
            <div className="produto"><img src={cupuacu} alt="Cupuaçu" /><p>Cupuaçu</p></div>
            <div className="produto"><img src={galinha} alt="Galinha Caipira" /><p>Galinha Caipira</p></div>
          </div>
        </section>

        <section>
          <h2>Produtos Mais Vendidos</h2>
          <img src={grafico} alt="Gráfico dos produtos mais vendidos" width="700" />
          <p>O gráfico acima apresenta dados ilustrativos sobre as categorias mais comercializadas.</p>
        </section>

        <section>
          <h2>Conheça Oriximiná</h2>
          <p>
            Localizada no oeste do Pará, Oriximiná possui grande riqueza cultural,
            ambiental e econômica. A Feira Digital busca divulgar os produtos locais
            e fortalecer a economia regional por meio da inclusão digital.
          </p>
        </section>

        <section>
          <h2>Depoimentos</h2>
          <blockquote>
            "A Feira Digital ajudou a divulgar meus produtos para mais pessoas."
            <br /><strong>— Produtor Local</strong>
          </blockquote>
          <blockquote>
            "Uma excelente iniciativa para valorizar nossa região."
            <br /><strong>— Visitante</strong>
          </blockquote>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Painel;
