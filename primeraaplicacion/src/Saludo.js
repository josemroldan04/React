// function Saludo() {
//   return <h2>¡Bienvenido al mundo de React!</h2>;
// }

// export default Saludo;

function Saludo(props) {
  return <h2>Hola {props.nombre}, ¡bienvenido a React!</h2>;
}
export default Saludo;
