import React, { useState } from 'react';
import SomaComponent from '../Soma/Soma';
import State from '../State/State';
import InverterString from '../InverterString/InverterString';
import Distribuitor from '../Distribuitor/Distribuitor';
import Fibonacci from '../Fibonacci/Fibonacci';

const componentes: Record<number, JSX.Element> = {
    1: <Fibonacci />,
    2: <Distribuitor />,
    3: <SomaComponent />,
    4: <State />,
    5: <InverterString />,
  };

const ProblemSelector: React.FC = () => {
    const [componenteSelecionado, setComponenteSelecionado] = useState<JSX.Element | null>(null);

    const handleClick = (numero: number) => {
      setComponenteSelecionado(componentes[numero] || null);
    };

  return (
    <div>
      <h1>Escolha um número para ver um problema:</h1>
      <div>
        {[1, 2, 3, 4, 5].map((numero) => (
          <button key={numero} onClick={() => handleClick(numero)}>
            {numero}
          </button>
        ))}
      </div>
      <div>
        {componenteSelecionado}
      </div>
    </div>
  );
};

export default ProblemSelector;