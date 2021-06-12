import React, { Fragment } from 'react';
import InformacoesBasicas from './InformacoesBasicas';
import InformacoesPessoais from './InformacoesPessoais';
import Endereco from './Endereco';
import './css/style.css'

function Form() {

  return (
    <Fragment>
      <div className="cadastro-cabecalho">
        <img src="./assets/img/doguito.svg" alt="Logo Doguito" className="cadastro-cabecalho__logo" />
        <h1 className="cadastro-cabecalho__titulo">PetShop</h1>
      </div>
      <section className="cartao">
        <h2 className="cartao__titulo">Complete seu cadastro</h2>
        <form action="./cadastro_concluido.html" className="formulario flex flex--coluna">
          <InformacoesBasicas />
          <InformacoesPessoais />
          <Endereco />
        </form>
      </section>
    </Fragment>

  )
}

export default Form