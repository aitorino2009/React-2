import React from 'react';
import './App.css';

import ComprovarNotes from './Ejercicio2';
import ProgramaMayorEdad from './Exercici3';
import ProgramaMayorEdad4 from './exercic4';
import ProgramaMayorEdad100 from './exercici5';
import ProgramaMayor from './exercici6';
import ExerciciPreuEntrada from './exercici7';

function App() {
  return (
    <div className="App">
      <h1>Mis Ejercicios de Programación</h1>

      <section className="ejercicio-seccion">
        <span className="etiqueta-ejercicio">Ejercicio 3.1 / 3.2</span>
        <ComprovarNotes />
      </section>

      <hr />

      <section className="ejercicio-seccion">
        <span className="etiqueta-ejercicio">Ejercicio 3.3</span>
        <ProgramaMayorEdad />
      </section>

      <hr />

      <section className="ejercicio-seccion">
        <span className="etiqueta-ejercicio">Ejercicio 3.4</span>
        <ProgramaMayorEdad4 />
      </section>

      <hr />

      <section className="ejercicio-seccion">
        <span className="etiqueta-ejercicio">Ejercicio 3.5</span>
        <ProgramaMayorEdad100 />
      </section>

      <hr />

      <section className="ejercicio-seccion">
        <span className="etiqueta-ejercicio">Ejercicio 3.6</span>
        <ProgramaMayor />
      </section>

      <hr />

      <section className="ejercicio-seccion nota-destacada">
        <span className="etiqueta-ejercicio tag-nota">Ejercicio 3.7 (Con Nota)</span>
        <ExerciciPreuEntrada />
      </section>
    </div>
  );
}

export default App;
