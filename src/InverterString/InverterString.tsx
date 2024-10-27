/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência
 ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/
import React, { useState } from 'react';
import styles from './InverterString.module.scss'

const InverterString: React.FC = () => {
  const [inputString, setInputString] = useState<string>('');
  const [reversedString, setReversedString] = useState<string>('');

  const inverterString = (str: string): string => {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  };

  const handleInvert = () => {
    const inverted = inverterString(inputString);
    setReversedString(inverted);
  };

  return (
    <div className={styles.container}>
      <h1>Inverter String</h1>
      <div>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Digite uma string"
      />
      <button onClick={handleInvert}>Inverter</button>
      </div>
      <div>
        <strong>String Invertida:</strong> {reversedString}
      </div>
    </div>
  );
};

export default InverterString;
