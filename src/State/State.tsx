/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação
 que cada estado teve dentro do valor total mensal da distribuidora. 
 */

import React from 'react';
import styles from './State.module.scss'

type Faturamento = {
    SP: number;
    RJ: number;
    MG: number;
    ES: number;
    Outros: number;
  };
  
  const State: React.FC = () => {
    const faturamento: Faturamento = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };
  
    const totalFaturamento = Object.values(faturamento).reduce((acc, value) => acc + value, 0);
  
    const calcularPercentuais = () => {
      return Object.entries(faturamento).map(([estado, valor]) => {
        const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
        return { estado, percentual, valor };
      });
    };
  
    const percentuais = calcularPercentuais();
  
    return (
      <div className={styles.container}>
        <h1>Percentual de Faturamento por Estado</h1>
        <table>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Faturamento (R$)</th>
              <th>Percentual (%)</th>
            </tr>
          </thead>
          <tbody>
            {percentuais.map(({ estado, percentual, valor }) => (
              <tr key={estado}>
                <td>{estado}</td>
                <td>{valor.toFixed(2)}</td>
                <td>{percentual}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <strong>Total Faturamento: R$ {totalFaturamento.toFixed(2)}</strong>
        </div>
      </div>
    );
  };
  
  export default State;
  