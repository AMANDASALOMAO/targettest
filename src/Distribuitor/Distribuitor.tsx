/*
 Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
 */
import React, { useEffect, useState } from 'react';
import faturamentoData from '../dados.json';
import styles from './Distribuitor.module.scss'

interface Faturamento {
  dia: number;
  valor: number;
}

const Distribuitor: React.FC = () => {
  const [menorFaturamento, setMenorFaturamento] = useState<number | null>(null);
  const [maiorFaturamento, setMaiorFaturamento] = useState<number | null>(null);
  const [diasAcimaMedia, setDiasAcimaMedia] = useState<number>(0);
  const [faturamentos, setFaturamentos] = useState<Faturamento[]>([]);

  useEffect(() => {
    const faturamentos: Faturamento[] = faturamentoData;
    setFaturamentos(faturamentos);

    const valoresFaturamento = faturamentos.map(f => f.valor).filter(v => v > 0);
    
    const menor = Math.min(...valoresFaturamento);
    const maior = Math.max(...valoresFaturamento);
    const media = valoresFaturamento.reduce((acc, val) => acc + val, 0) / valoresFaturamento.length;

    const diasAcimaMediaCount = faturamentos.filter(f => f.valor > media).length;

    setMenorFaturamento(menor);
    setMaiorFaturamento(maior);
    setDiasAcimaMedia(diasAcimaMediaCount);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.invoicing}>
      <h1>Relatório de Faturamento</h1>
        <strong>Menor Faturamento:</strong> R$ {menorFaturamento?.toFixed(2) || 'N/A'}
        <strong>Maior Faturamento:</strong> R$ {maiorFaturamento?.toFixed(2) || 'N/A'}
        <strong>Número de Dias Acima da Média:</strong> {diasAcimaMedia}
        </div>
      <div className={styles.data}>
      <h2>Dados de Faturamento Diário</h2>
      <table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          {faturamentos.map(f => (
            <tr key={f.dia}>
              <td>{f.dia}</td>
              <td>{f.valor.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Distribuitor;
