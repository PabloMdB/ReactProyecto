import { Link } from 'react-router';
import './Item.css';

function Item({producto}) {

const {id, nombre, precio, stock} = producto;

    function agregarAlCarrito (prod){
        const nuevoProducto ={
            ...prod,
            cantidad: 1,
        }
    console.log("vas agregar :", nuevoProducto);;
    };

    return (
        <div className='card  text-center p-2  bg-dark-subtle' >
            <h5 className='card-header p-1 text '>{nombre}</h5>
            <h3 className='card-text p-3'>${precio}</h3>
            <p>Quedan {stock} disponibles</p>
            <button className='btn btn-primary my-4 fs-6 p-2' onClick={()=> agregarAlCarrito(producto)}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
            <button className='btn btn-primary my-1 fs-6 p-1'>Ver detalle</button>
            </Link>
        </div>
    );
};

export default Item;