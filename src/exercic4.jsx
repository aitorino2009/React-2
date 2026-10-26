export default function ProgramaMayorEdad () {
  const edad = 19;

  function comprobar(valor){
    const edad = Number(valor);
    const resultado = (edad < 18) ? 'Menor de edad' 
      : (edad < 65) ? 'Mayor de edad' 
      : 'Tercera edad';
    return resultado;
  }

  function inicio(dato) {
    const mayorEdad = comprobar(dato);
    return mayorEdad;
  }

  return ( 
    <div>
      <h2>Programa de admisión</h2>
      <p>
        {inicio(edad)}
      </p>
    </div>
  );
}
