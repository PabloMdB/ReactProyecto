
import './ItemCount.css';


// ItemCount(props);
// ItemCount({stock, nombreDelProducto});

// const {stock, nombreDelProducto} = props;

//en vez de hacer una variable props y despues el destrugturing dentro del codigo
// La podemos hacer directo a los parentesis de la función y ya.

function ItemCount({stock, contador, setContador}) {

    // useState es una funcion (hook) que nos permite Crear un estado. Nos devuelve un array con:

    /*
    -El estado(variable que se va a modificar o actualizar y el DOM lo interpreta y modifica automaticamente)
    -La función que modifique ese estado.

    Dentro de los parentesis le pasamos el estado inicial. Es decir, el primer valor que va a tomar nuestro estado.
    */
    //usamos Destructuring
    

    //EN VEZ DE ESTO. 
    //const hookDeEstado =useState(5);
    //const estado = hookDeEstado[0];
    //const funcionModificadora = hookDeEstado[1];
    // console.log(estado);
    // console.log(funcionModificadora);
    // console.log(hookDeEstado);
    // let contador = 5;
    

    function modificarContador(operacion){
        if(operacion === "+"){
            if(contador < stock){
                setContador(contador + 1);
            }
        }   else{
                if(contador > 1){
                    setContador(contador - 1);
                };
        }; 
    };

    // console.log(props);

    // function agregarAlCarrito (){
    //     console.log(`Vas a agregar ${contador} unidades`);
    //     setContador(1);
    // };

    return (
        <div style ={{display :"flex", flexDirection: "column", padding:"1rem"}}>
        <div style={{display: "flex", width: "11rem", padding: "2rem", justifyContent: "space-around", alignItems:"center"}}>
            <button className="btn btn-primary" onClick={() => modificarContador("-")}>-</button>
            <p>{contador}</p>
            <button className="btn btn-primary" onClick={() => modificarContador("+")}>+</button>
        </div>
        </div>
    ); 
};

export default ItemCount;