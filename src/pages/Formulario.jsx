import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Formulario.css";

function Formulario() {
  const [form, setForm] = useState({
    setor: "reclamacao",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleEnviar(e) {
    e.preventDefault();
    if (!form.email || !form.telefone || !form.assunto || !form.mensagem) {
      setFeedback("erro");
      return;
    }
    setFeedback("sucesso");
    setForm({ setor: "reclamacao", email: "", telefone: "", assunto: "", mensagem: "" });
  }

  function handleCancelar() {
    setForm({ setor: "reclamacao", email: "", telefone: "", assunto: "", mensagem: "" });
    setFeedback("");
  }

  return (
    <>
      <Header />

      <main>
        <section className="formulario">
          <h2>Caixa de Sugestões e Reclamações</h2>
          <p>Fale com a gente: relate problemas ou envie sugestões.</p>

          <form onSubmit={handleEnviar}>
            <label htmlFor="setor">Para Reclamações e Sugestões</label>
            <select id="setor" name="setor" value={form.setor} onChange={handleChange}>
              <option value="reclamacao">Reclamação</option>
              <option value="sugestao">Sugestão</option>
            </select>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email}
              onChange={handleChange} placeholder="seuemail@exemplo.com" />

            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" value={form.telefone}
              onChange={handleChange} placeholder="(91) 99999-9999" />

            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" name="assunto" value={form.assunto}
              onChange={handleChange} placeholder="Descreva o assunto" />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" value={form.mensagem}
              onChange={handleChange} rows={5} placeholder="Escreva sua mensagem aqui..." />

            {feedback && (
              <p className={`feedback ${feedback}`}>
                {feedback === "sucesso"
                  ? "✅ Mensagem enviada com sucesso!"
                  : "⚠️ Preencha todos os campos."}
              </p>
            )}

            <div className="botoes">
              <button type="button" className="cancelar" onClick={handleCancelar}>Cancelar</button>
              <button type="submit" className="enviar">Enviar</button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Formulario;
