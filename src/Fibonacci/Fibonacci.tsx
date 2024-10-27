/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
 sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
  escreva um programa na linguagem que desejar onde, informado um número, ele calcule a
 sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
  IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou 
  pode ser previamente definido no código;
 */

  import React, { useState } from 'react';
  import styles from './Fibonacci.module.scss'

  const Fibonacci: React.FC = () => {
    const [numero, setNumero] = useState<number>(0);
    const [mensagem, setMensagem] = useState<string>('');
  
    const geraFibonacci = (ate: number): number[] => {
      const fib: number[] = [0, 1];
  
      while (true) {
        const proximo = fib[fib.length - 1] + fib[fib.length - 2];
        if (proximo > ate) break;
        fib.push(proximo);
      }
  
      return fib;
    };
  
    const pertenceAFibonacci = (numero: number): boolean => {
      const fibonacci = geraFibonacci(numero);
      return fibonacci.includes(numero);
    };
  
    const verificarFibonacci = () => {
      const pertence = pertenceAFibonacci(numero);
      setMensagem(pertence ? `${numero} pertence à sequência de Fibonacci.` : `${numero} não pertence à sequência de Fibonacci.`);
    };
  
    return (
      <div className={styles.container}>
        <h1>Verificador de Fibonacci</h1>
        <div>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(Number(e.target.value))}
          placeholder="Digite um número"
        />
        <button onClick={verificarFibonacci}>Verificar</button>
        <p>{mensagem}</p>
      </div>
      </div>
    );
  };
  
  export default Fibonacci;
  