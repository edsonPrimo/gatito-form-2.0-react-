import React, { useState, useContext } from 'react';
import Validacoes from '../../context/Validacoes';
import useErros from '../../hooks/useErros';

function InformacoesBasicas() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const validacoes = useContext(Validacoes)
  const [msgErro, valida] = useErros(validacoes)

  return (
    <fieldset>
      <legend className="formulario__legenda">Informações básicas</legend>
      <div className="input-container">
        <input
          value={nome}
          onChange={(e) => {
            setNome(e.target.value)
          }}
          onBlur={valida}
          name="nome"
          id="nome"
          required
          className="input"
          type="text"
          data-tipo="nome"
          placeholder="Nome"
        />
        <label className="input-label" htmlFor="nome">Nome</label>
        <span className="input-mensagem-erro">{msgErro.nome}</span>
      </div>
      <div className="input-container">
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          onBlur={valida}
          name="email"
          id="email"
          className="input"
          type="email"
          data-tipo="email"
          required
          placeholder="Email" />
        <label className="input-label" htmlFor="email">Email</label>
        <span className="input-mensagem-erro">{msgErro.email}</span>
      </div>
      <div className="input-container">
        <input
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value)
          }}
          onBlur={valida}
          name="senha"
          id="senha"
          className="input"
          type="password"
          data-tipo="senha"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[!@#$%^*_=+-]).{6,12}$"
          title="A senha deve contar de 6 a 12 caracteres, sendo pelo menos 1 número e uma letra maiúscula, não deve conter símbolos."
          required
          placeholder="Senha"
        />
        <label className="input-label" htmlFor="senha">Senha</label>
        <span className="input-mensagem-erro">{msgErro.senha}</span>
      </div>
    </fieldset>

  )
}

export default InformacoesBasicas