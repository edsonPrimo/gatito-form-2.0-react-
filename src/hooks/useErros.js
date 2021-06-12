import React, { useState } from 'react';

function useErros(validacoes) { 

  const [msgErros, setErros] = useState()
  
  function validaCampos(event){ 
      event.target.parentNode.classList.remove('input-container--invalido')
      const validando = validacoes(event.target)
      setErros(validando.text)
      if(!validando.valido) {
        event.target.parentNode.classList.add('input-container--invalido')
      }
  }

  return [msgErros, validaCampos]
}

export default useErros