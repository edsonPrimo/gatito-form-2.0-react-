import React, { Fragment } from 'react';
import './styles/App.css';
import Header from './components/Header'
import Form from './components/Form'
import {valida} from './models/valida'
import Validacoes from './context/Validacoes'
function App() {

  return (
    <Fragment>
      <Header />
      <main className="container flex flex--coluna flex--centro">
        <Validacoes.Provider value={valida}>
          <Form />
        </Validacoes.Provider>
      </main>
    </Fragment>
  );
}

export default App;
