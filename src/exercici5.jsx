export default function ProgramaMayorEdad100() {
  const edad = 101;

  function comprobar(valor) {
    const edadNum = Number(valor);
    const resultado = (edadNum > 100) 
      ? 'Enhorabuena'
      : (edadNum < 18) 
        ? 'Menor de edad' 
        : (edadNum < 65) 
          ? 'Mayor de edad' 
          : 'Tercera edad';
    return resultado;
  }

  function inicio(dato) {
    const mayorEdad = comprobar(dato);
    return mayorEdad;
  }

  return (
    <div>
      <h2>Programa de admisión (ampliado a más de 100 años)</h2>
      <p>
        Edad actual: {edad} años
        <br />
        Resultado: <strong>{inicio(edad)}</strong>
      </p>
    </div>
  );
}
