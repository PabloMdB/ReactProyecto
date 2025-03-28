import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
//const nombreDelProfe ="Lucas";

// const array = [1, 2, 3];
// const objeto ={
//   nombre:"Pablo",
//   apellido: "Marinetti"
// };


//Spread operator: permite "desparramar" los elementos que tenemor en un array o en un objeto.
// console.log(array);
// console.log([...array, 10]);
// console.log(objeto);
// console.log({...objeto, nombre :"Pablo Maria"});

// const nombre = objeto.nombre;
// const apellido = objeto.apellido; ESTO ES LO QUE QUEREMOS EVITAR.

// DESTRUCTURING: NOS PERMITE OBTENES VALORES DENTRO DE UN ARRAY U OBJETO Y GUARDARLOS EN VARIALBLES.
// const {apellido, nombre} = objeto;
//SE PUEDE CAMBIAR PONIENDOLE UN ALIAS AL OBJETO, ARRAY.
// const {nombre: name, apellido: lastName} = objeto;

// console.log("Hola, mi nombre es " + objeto.nombre + " " + objeto.apellido);
// console.log(`Hola, mi nombre es ${objeto.nombre} ${objeto.apellido}` )

// console.log(`Hola, mi nombre es ${name} ${lastName}`);


// const primerNumero = array [0];
// const segundoNumero = array [1];
// const tercerNumero= array [2];

// const [primerNumero, segundoNumero, tercerNumero] = array ;
//     Position  0  , position 1  , position 2 del array

// console.log("este es mi primer numero ", primerNumero);
// console.log("este es mi segundo numero ", segundoNumero);
// console.log("este es mi tercer numero ", tercerNumero);


  return (
      <BrowserRouter>
        <Navbar />   
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetail/>}/>
          <Route path="*" element={<p>404 Not Found</p>}/>
        </Routes>
      </BrowserRouter >       
  );
};

export default App
