/*
1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/

import React from 'react';

const SomaComponent: React.FC = () => {
  const calcularSoma = (indice: number): number => {
    let soma = 0;
    let k = 0;

    while (k < indice) {
      k += 1;
      soma += k;
    }

    return soma;
  };

  const indice = 13;
  const soma = calcularSoma(indice);

  return (
    <div>
      <h1>Resultado da Soma</h1>
      <p>A soma dos primeiros {indice} números inteiros é: {soma}</p>
    </div>
  );
};

export default SomaComponent;
