import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Cadastro.css";

function Cadastro() {
  const [form, setForm] = useState({
    codigo: "", nome: "", cpf: "", rg: "",
    estadoCivil: "", dataNasc: "", sexo: "",
    endereco: "", numero: "", complemento: "",
    bairro: "", cep: "", cidade: "", uf: "",
    telefone: "", celular: "", email: "", obs: "",
  });
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSalvar(e) {
    e.preventDefault();
    if (!form.nome || !form.cpf || !form.email) {
      setFeedback("erro");
      return;
    }
    setFeedback("sucesso");
  }

  function handleLimpar() {
    setForm({
      codigo: "", nome: "", cpf: "", rg: "",
      estadoCivil: "", dataNasc: "", sexo: "",
      endereco: "", numero: "", complemento: "",
      bairro: "", cep: "", cidade: "", uf: "",
      telefone: "", celular: "", email: "", obs: "",
    });
    setFeedback("");
  }

  return (
    <>
      <Header />

      <br /><br />

      <form className="form-outline" onSubmit={handleSalvar}>
        <h1 className="form-header">FORMULÁRIO DE CADASTRO</h1>

        <div className="row">
          <label className="field">Código
            <input type="text" name="codigo" value={form.codigo} onChange={handleChange} placeholder="123" />
          </label>
        </div>

        <div className="row">
          <label className="field grow">Nome
            <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Marina da Costa Silva" />
          </label>
          <label className="field">CPF/CNPJ
            <input type="text" name="cpf" value={form.cpf} onChange={handleChange} placeholder="123.456.798-00" />
          </label>
          <label className="field">RG
            <input type="text" name="rg" value={form.rg} onChange={handleChange} placeholder="45.667.009-1" />
          </label>
        </div>

        <div className="row">
          <label className="field">Estado Civil
            <input type="text" name="estadoCivil" value={form.estadoCivil} onChange={handleChange} placeholder="Casado" />
          </label>
          <label className="field">Data de Nascimento
            <input type="text" name="dataNasc" value={form.dataNasc} onChange={handleChange} placeholder="04/12/1978" />
          </label>
          <label className="field">Sexo
            <input type="text" name="sexo" value={form.sexo} onChange={handleChange} placeholder="Feminino" />
          </label>
        </div>

        <div className="row">
          <label className="field grow">Endereço
            <input type="text" name="endereco" value={form.endereco} onChange={handleChange} placeholder="Av Brasil" />
          </label>
          <label className="field">Número
            <input type="text" name="numero" value={form.numero} onChange={handleChange} placeholder="1234" />
          </label>
          <label className="field">Complemento
            <input type="text" name="complemento" value={form.complemento} onChange={handleChange} placeholder="Casa" />
          </label>
        </div>

        <div className="row">
          <label className="field grow">Bairro
            <input type="text" name="bairro" value={form.bairro} onChange={handleChange} placeholder="Centro" />
          </label>
          <label className="field">CEP
            <input type="text" name="cep" value={form.cep} onChange={handleChange} placeholder="13000-000" style={{ width: "100px" }} />
          </label>
          <label className="field">Cidade
            <input type="text" name="cidade" value={form.cidade} onChange={handleChange} placeholder="Oriximiná" />
          </label>
          <label className="field">UF
            <input type="text" name="uf" value={form.uf} onChange={handleChange} placeholder="PA" style={{ width: "100px" }} />
          </label>
        </div>

        <div className="row">
          <label className="field grow">Telefone
            <input type="text" name="telefone" value={form.telefone} onChange={handleChange} placeholder="(91) 3333-0000" />
          </label>
          <label className="field grow">Celular
            <input type="text" name="celular" value={form.celular} onChange={handleChange} placeholder="(91) 9999-0001" />
          </label>
        </div>

        <div className="row">
          <label className="field grow">E-mail
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="maria@gmail.com" />
          </label>
        </div>

        <div className="row-obs">
          <span className="obs-title">Observações</span>
          <textarea className="obs-textarea" name="obs" value={form.obs}
            onChange={handleChange} placeholder="Digite aqui suas observações..." />
        </div>

        {feedback && (
          <p className={`feedback-cadastro ${feedback}`}>
            {feedback === "sucesso" ? "✅ Cadastro salvo com sucesso!" : "⚠️ Preencha Nome, CPF e E-mail."}
          </p>
        )}

        <div className="row-buttons">
          <button type="button" className="reset" onClick={handleLimpar}>Limpar</button>
          <button type="submit" className="submit">Salvar</button>
        </div>
      </form>

      <br /><br />
      <Footer />
    </>
  );
}

export default Cadastro;
