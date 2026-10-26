export default function ProgramaMayorEdad() {
  const edad = 19;

  function comprobar(valor) {
    const edadNum = Number(valor);
    const resultado = (edadNum < 18) ? 'Menor de edad' : 'Admitido. Mayor de edad';
    return resultado;
  }

  function inicio(dato) {
    const mensaje = comprobar(dato);
    return mensaje;
  }

  return (
    <div style={{ border: '1px solid #4A90E2', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
      <h2>Programa de admisión</h2>
      <p>
        Resultado para la edad {edad} años:
        <br />
        <strong>{inicio(edad)}</strong>
      </p>
    </div>
  );
}
