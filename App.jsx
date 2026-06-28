import React, { useState, useEffect } from 'react'; // Adicionamos os Hooks aqui!
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import './css/style.css'; 

function App() {
  const listaCategorias = [
    { id: 1, titulo: "Artesanato Regional", descricao: "Peças artesanais produzidas por artistas locais." },
    { id: 2, titulo: "Medicamentos Fitoterápicos", descricao: "Óleos, xaropes e produtos naturais." },
    { id: 3, titulo: "Hortaliças", descricao: "Verduras, legumes e produtos orgânicos." },
    { id: 4, titulo: "Farinhas e Derivados da Mandioca", descricao: "Farinha d'água, tapioca, beiju e macaxeira." },
    { id: 5, titulo: "Castanha-do-Pará", descricao: "Castanha beneficiada e in natura." },
    { id: 6, titulo: "Frutas Regionais", descricao: "Açaí, cupuaçu, bacuri, cajá e outras frutas amazônicas." },
    { id: 7, titulo: "Comidas Típicas", descricao: "Tacacá, vatapá, maniçoba e outras delícias regionais." }
  ];

  const listaProdutos = [
    { id: 1, nome: "Castanha-do-Pará", imagem: "img/castanha.jpg" },
    { id: 2, nome: "Acerola", imagem: "img/acerola.webp" },
    { id: 3, nome: "Milho", imagem: "img/milho.jpg" },
    { id: 4, nome: "Cupuaçu", imagem: "img/cupuacu.jpg" },
    { id: 5, nome: "Galinha Caipira", imagem: "img/galinha.jpeg" }
  ];

  // --- CARROSSEL (ROTATIVO) ---
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    // temporizador que roda a cada 3 segundos
    const temporizador = setInterval(() => {
      setIndiceAtual((indiceAnterior) => 
        // Se estiver no último produto, volta pro primeiro. Se não, vai pro próximo.
        indiceAnterior === listaProdutos.length - 1 ? 0 : indiceAnterior + 1
      );
    }, 3000);

    // Limpa o cronômetro para não travar
    return () => clearInterval(temporizador);
  }, [listaProdutos.length]);
  // ------------------------------------------

  return (
    <>
      <Cabecalho />
      
      <main>
        <section>
          <img src="img/banner.png" alt="Banner da Feira Digital de Oriximiná" width="100%" height="500" />
        </section>

        <section>
          <h2>Conheça a Feira Digital</h2>
          <p>Seja bem-vindo à <strong>I Feira Digital de Oriximiná</strong>, um espaço virtual criado para valorizar os produtores locais, incentivar o empreendedorismo e promover a riqueza cultural, gastronômica e artesanal do nosso município.</p>
          <p>Aqui você encontra produtos regionais, histórias inspiradoras, oportunidades de negócios e muito mais. Nossa missão é aproximar produtores e consumidores por meio da tecnologia.</p>
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
          <div className="categorias-container">
            {listaCategorias.map(categoria => (
              <article key={categoria.id}>
                <h3>{categoria.titulo}</h3>
                <p>{categoria.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        {/* --- SEÇÃO DOS PRODUTOS DA SEMANA --- */}
        <section>
          <h2>Produtos da Semana</h2>
          <div className="produtos-semana" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Renderiza apenas UM produto por vez, baseado na memória (indiceAtual) */}
            <div className="produto" style={{ textAlign: 'center', transition: 'all 0.5s ease' }}>
              <img 
                src={listaProdutos[indiceAtual].imagem} 
                alt={listaProdutos[indiceAtual].nome} 
                style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '15px' }}
              />
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '15px' }}>
                {listaProdutos[indiceAtual].nome}
              </p>
            </div>

            {/* Criando bolinhas */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              {listaProdutos.map((_, index) => (
                <span 
                  key={index} 
                  style={{
                    height: '12px',
                    width: '12px',
                    backgroundColor: index === indiceAtual ? '#4CAF50' : '#ccc',
                    borderRadius: '50%',
                    display: 'inline-block',
                    transition: 'background-color 0.3s ease'
                  }}
                />
              ))}
            </div>

          </div>
        </section>

        <section>
          <h2>Produtos Mais Vendidos</h2>
          <img src="img/grafico.jpeg" alt="Gráfico dos produtos mais vendidos" width="700" />
          <p>O gráfico acima apresenta dados ilustrativos sobre as categorias mais comercializadas na Feira Digital de Oriximiná.</p>
        </section>

        <section>
          <h2>Conheça Oriximiná</h2>
          <p>Localizada no oeste do Pará, Oriximiná possui grande riqueza cultural, ambiental e econômica. A Feira Digital busca divulgar os produtos locais e fortalecer a economia regional por meio da inclusão digital.</p>
        </section>

        <section>
          <h2>Depoimentos</h2>
          <blockquote>
            "A Feira Digital ajudou a divulgar meus produtos para mais pessoas."<br />
            <strong>— Produtor Local</strong>
          </blockquote>
          <blockquote>
            "Uma excelente iniciativa para valorizar nossa região."<br />
            <strong>— Visitante</strong>
          </blockquote>
        </section>
      </main>

      <Rodape />
    </>
  );
}

export default App;