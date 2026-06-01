1. ¿Qué es React?

React es una biblioteca de JavaScript creada por Meta Platforms para construir interfaces de usuario (UI) de manera rápida y eficiente. Permite crear aplicaciones web mediante componentes reutilizables que facilitan el desarrollo y el mantenimiento del código.

2. ¿Por qué usar React?

React es muy utilizado porque:

Permite crear interfaces dinámicas e interactivas.
Utiliza componentes reutilizables, lo que reduce la cantidad de código.
Facilita el mantenimiento y la organización de proyectos grandes.
Tiene una gran comunidad y abundante documentación.
Ofrece un alto rendimiento gracias al uso del DOM virtual (Virtual DOM).
Es utilizado por muchas empresas para desarrollar aplicaciones web modernas.
3. ¿Qué necesito saber antes?

Antes de aprender React, es recomendable tener conocimientos básicos de:

HTML: para crear la estructura de las páginas web.
CSS: para diseñar y dar estilo a las páginas.
JavaScript: especialmente variables, funciones, objetos, arreglos, eventos y manipulación del DOM.
Conceptos básicos de programación como condicionales, ciclos y funciones.




Parte 4: Investigación Guiada
1. ¿Qué es JSX?

JSX (JavaScript XML) es una extensión de sintaxis de JavaScript que permite escribir código similar a HTML dentro de React. JSX facilita la creación de interfaces de usuario porque combina la estructura visual con la lógica del programa.

Ejemplo:

function Saludo() {
  return <h1>Hola Mundo</h1>;
}
2. ¿Qué es un componente funcional?

Un componente funcional es una función de JavaScript que devuelve elementos React (JSX) para mostrar contenido en la pantalla.

Ejemplo:

function Bienvenida() {
  return <h2>Bienvenido a React</h2>;
}

export default Bienvenida;
3. ¿Qué son los props en React?

Los props (propiedades) son datos que se envían de un componente padre a un componente hijo. Permiten reutilizar componentes con información diferente.

Ejemplo:

function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

function App() {
  return <Saludo nombre="Juan" />;
}

Resultado:

Hola, Juan
4. ¿Cómo se actualiza la pantalla automáticamente al cambiar datos?

React utiliza un sistema llamado Virtual DOM. Cuando los datos cambian, React detecta el cambio, actualiza el Virtual DOM y luego modifica únicamente las partes necesarias de la pantalla, haciendo la actualización rápida y eficiente.

Ejemplo:

function Contador() {
  const [contador, setContador] = React.useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

Cada vez que se hace clic en el botón, React actualiza automáticamente el número mostrado.

5. ¿Qué hace el useState?

useState es un Hook de React que permite agregar y manejar estados dentro de componentes funcionales. Cuando el estado cambia, React vuelve a renderizar el componente para mostrar la información actualizada.

Ejemplo:

import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;