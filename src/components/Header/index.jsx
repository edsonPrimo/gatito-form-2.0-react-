import React from 'react';
import './style.css'
function Header() {
  return (
    <header className="cabecalho container">
      <img src="./assets/img/doguitoadm.svg" alt="Logo Doguito" className="cabecalho__logo"/>
        <nav>
          <ul className="cabecalho__lista-navegacao">
            <li className="cabecalho__link"><p>Dashboard</p></li>
            <li className="cabecalho__link"><p>Produtos</p></li>
            <li className="cabecalho__link"><p>Clientes</p></li>
            <li className="cabecalho__link"><p>Pets</p></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header;