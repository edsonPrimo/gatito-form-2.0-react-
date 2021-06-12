import React, { useState, useContext } from 'react';
import Validacoes from '../../context/Validacoes';
import useErros from '../../hooks/useErros';

function InformacoesPessoais() {
  const [cpf, setCPF] = useState("")
  const [nascimento, setNascimento] = useState("")
  const validacoes = useContext(Validacoes)
  const [msgErro, valida] = useErros(validacoes)

  return (
    <fieldset>
      <legend className="formulario__legenda">Informações pessoais</legend>
      <div className="input-container">
        <input
          value={nascimento}
          onChange={(e) => {
            setNascimento(e.target.value)
          }}
          onBlur={valida}
          name="nascimento"
          id="nascimento"
          className="input"
          type="date"
          placeholder="Data de nascimento"
          data-tipo="dataNascimento"
          required
        />
        <label className="input-label" htmlFor="nascimento">{msgErro.nascimento}</label>
        <span className="input-mensagem-erro"></span>
      </div>
      <div className="input-container">
        <input
          value={cpf}
          onChange={(e) => {
            setCPF(e.target.value)
          }}
          onBlur={valida}
          name="cpf"
          id="cpf"
          className="input"
          type="text"
          placeholder="CPF"
          required
          data-tipo="cpf" />
        <label className="input-label" htmlFor="cpf">CPF</label>
        <span className="input-mensagem-erro">{msgErro.cpf}</span>
      </div>
    </fieldset>
  )
}

export default InformacoesPessoais