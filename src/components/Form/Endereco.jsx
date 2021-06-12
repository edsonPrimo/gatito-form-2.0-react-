import React, { useState } from 'react';

function Endereco() {
  const [cep, setCEP] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  return (
    <fieldset>
      <legend className="formulario__legenda">Endereço</legend>
      <div className="input-container">
        <input
          value={cep}
          onChange={(e) => {
            setCEP(e.target.value)
          }}
          name="cep"
          id="cep"
          className="input"
          type="text"
          placeholder="CEP"
          required
          pattern="\d{5}-?\d{3}"
          data-tipo="cep"
        />
        <label className="input-label" htmlFor="cep">CEP</label>
        <span className="input-mensagem-erro">Este campo não está válido</span>
      </div>
      <div className="input-container">
        <input
          value={logradouro}
          onChange={(e) => {
            setLogradouro(e.target.value)
          }}
          name="logradouro"
          id="logradouro"
          className="input"
          type="text"
          required
          data-tipo="logradouro"
          placeholder="Logradouro"
        />
        <label className="input-label" htmlFor="logradouro">Logradouro</label>
        <span className="input-mensagem-erro">Este campo não está válido</span>
      </div>
      <div className="input-container">
        <input
          value={cidade}
          onChange={(e) => {
            setCidade(e.target.value)
          }}
          name="cidade"
          id="cidade"
          className="input"
          type="text"
          required
          data-tipo="cidade"
          placeholder="Cidade"
        />
        <label className="input-label" htmlFor="cidade">Cidade</label>
        <span className="input-mensagem-erro">Este campo não está válido</span>
      </div>
      <div className="input-container">
        <input
          value={estado}
          onChange={(e) => {
            setEstado(e.target.value)
          }}
          name="estado"
          id="estado"
          className="input"
          type="text"
          required
          data-tipo="estado"
          placeholder="Estado"
        />
        <label className="input-label" htmlFor="estado">Estado</label>
        <span className="input-mensagem-erro">Este campo não está válido</span>

        <button type="submit" className="botao">Cadastrar</button>
      </div>
    </fieldset>
  )
}

export default Endereco