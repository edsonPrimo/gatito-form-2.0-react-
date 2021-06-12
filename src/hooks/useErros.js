import React, { useState } from 'react';

function useErros(validacoes) { 

  const [msgErros, setErros] = useState({})
  
  function validaCampos(event){ 
      const validando = validacoes(event.target)

      const novosErros = {...msgErros}
      novosErros[event.target.name] = validando.text
      setErros(novosErros)

      if(!validando.valido) {
        event.target.parentNode.classList.add('input-container--invalido')
      }
      else {
        event.target.parentNode.classList.remove('input-container--invalido')
      }
  }

  return [msgErros, validaCampos]
}

export default useErros