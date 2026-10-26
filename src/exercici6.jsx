import React from 'react';

export default function ProgramaMayor() {
  const numero1 = 9;
  const numero2 = 9;

  function compruebaMayor(n1, n2) {
    const resultado = (n1 > n2)
      ? `El mayor es el primero, ${n1}`
      : (n2 > n1)
        ? `El mayor es el segundo, ${n2}`
        : 'Los números son iguales';
    return resultado;
  }

  return (
    <div>
      <h2>Comprobador de mayor</h2>
      <p>
        Número 1: <strong>{numero1}</strong> | Número 2: <strong>{numero2}</strong>
      </p>
      <p>
        Resultado: <strong>{compruebaMayor(numero1, numero2)}</strong>
      </p>
    </div>
  );
}
