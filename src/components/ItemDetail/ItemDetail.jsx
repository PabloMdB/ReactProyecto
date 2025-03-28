import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { fetchData } from '../fetchData';
import Loader from '../Loader/Loader';


function ItemDetail() {
    const {id} = useParams ();
    const [loading, setLoading] =useState(true);
    const [producto, setProducto] =useState(null);
    const [contador, setContador] =useState(1);

function agregarAlCarrito (prod){
    const nuevoProducto ={
        ...prod,
        cantidad: contador,
    }
console.log("vas agregar :", nuevoProducto);
setContador(1);
};

    useEffect(() =>{fetchData
        fetchData()
            .then(response =>{
                const productoAMostrar = response.find(el => el.id ===parseInt(id));
                setProducto(productoAMostrar);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
            .catch(err => console.error(err))
    }, [id]);

    return (
        loading ?
            <Loader/>

            : 
            <div className='card  text-center p-1  bg-dark-subtle'>
            {
                producto ?
                <>
                <h5 className='card-header p-1 text'>{producto.nombre}</h5>
                <h3 className='card-text p-2'>Precio: <b>${producto.precio}</b></h3>
                <h6 className='card-text p-1'>Categoria: <b>${producto.categoria.toUpperCase}</b></h6>
                <p><b>{producto.descripcion}</b></p>
                <p>Quedan <b>{producto.stock}</b> disponibles</p>

                <ItemCount stock ={producto.stock} contador ={contador} setContador={setContador} />

                <button className='btn btn-primary my-2 fs-6 p-2' onClick={()=> agregarAlCarrito(producto)}>Agregar al carrito</button>
                <Link to="/">
                <button className='btn btn-primary my-1 fs-6 p-2'>Volver a inicio</button>
                </Link>
                
                </>
                :
                <p>Producto no encontrado con id {id}</p>
            }
            </div>
    );
};

export default ItemDetail;