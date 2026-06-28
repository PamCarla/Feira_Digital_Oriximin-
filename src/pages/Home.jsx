import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/Home.css";

import feira_produtor from "../assets/feira_produtor.jpg";
import feira_2 from "../assets/feira_2.jpg";


function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="banner">
          <h2>Bem-vindo à Feira Digital Oriximiná</h2>
          <p>
            Uma plataforma criada para facilitar a comercialização de produtos
            locais, aproximando produtores rurais, feirantes e consumidores
            através da tecnologia.
          </p>
        </section>

        <section className="sobre">
          <h2>Qual problema resolvemos?</h2>
          <p>
            Muitos produtores enfrentam dificuldades para divulgar seus produtos
            e alcançar novos clientes. A Feira Digital Oriximiná oferece um
            ambiente simples e acessível para divulgação e acompanhamento dos
            produtos disponíveis.
          </p>
        </section>

        <section className="publico">
          <h3>Público-Alvo</h3>
          <div className="container-cards">
            <Card titulo="Produtores" descricao="Divulgam seus produtos." />
            <Card titulo="Feirantes" descricao="Produtos que estão em alta na feira." />
            <Card titulo="Consumidores" descricao="Encontram produtos locais com facilidade." />
          </div>
        </section>

        <section className="imagem">
          <img src={feira_produtor} alt="feira do produtor" />
          <img src={feira_2} alt="Feira" />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
