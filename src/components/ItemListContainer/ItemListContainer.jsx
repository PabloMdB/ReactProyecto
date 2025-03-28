/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState} from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../fetchData';
import { useParams } from 'react-router';

function ItemListContainer() {

    const[loading, setLoading] = useState(true);

    const[todosLosProductos, setTodosLosProductos] = useState(null);
    
    const{categoria} = useParams();


    useEffect(() =>{

        if (!todosLosProductos){ 
            fetchData()
            .then(response =>{
                setTodosLosProductos(response);
                console.log(categoria);
                setTimeout(() => {
                    setLoading(false);
                    
                }, 500);
            })
            .catch(err => console.error(err))

        }
    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(err => console.error(err));
    
        //Deberiamos traer nuestros productos.
        // setTimeout(() => {
        // }, 2500);
    }, [categoria])

    return (
        loading ? 

            <Loader/>
            :

            <div>
                <div className='container-productos'>
                    {
                        categoria 
                        
                        ?

                        todosLosProductos.filter(el => el.categoria ===categoria).map((el) => {
                            return(
                                <Item key={el.id} producto={el}/>
                            );
                        })

                        :
                        
                        todosLosProductos.map((el) => {
                            return(
                                <Item key={el.id} producto={el}/>
                            );
                        })};
                </div>
            </div>
    );
};

export default ItemListContainer;