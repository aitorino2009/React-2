import React from 'react';

export default function ExerciciPreuEntrada() {
  const edad = 65;

  function calcularPrecio(valor) {
    const e = Number(valor);
    const resultado = (e > 60) 
      ? 'Precio: Gratuito' 
      : (e > 25 && e <= 60) 
        ? 'Precio: 2€' 
        : (e < 18) 
          ? 'Precio: 1€' 
          : 'Precio: 1.50€ (Franja 18-25 años)';
    return resultado;
  }

  function mostrarRespuesta(dato) {
    return calcularPrecio(dato);
  }

  return (
    <div style={{ border: '1px solid #10B981', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
      <h2>Ejercicio con Nota - Cálculo del precio según la edad</h2>
      <p>
        Edad del cliente: <strong>{edad} años</strong>
      </p>
      <p>
        Respuesta del sistema: <strong>{mostrarRespuesta(edad)}</strong>
      </p>
    </div>
  );
}
