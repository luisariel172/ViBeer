
//
//	Renderiza contador de un item
//

import './index.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

//  Botón agregar al carrito
import AgregarAlCarrito from './AgregarAlCarrito'

const ItemDetailCounter = ({ item, inicial = 1 }) => {

    //  Bandera de agregado al carrito
    const [agregado, setAgregado] = useState(false);
    const onAdd = () => setAgregado(true);

    //  valor del contador
    const [valor, setValor] = useState(inicial);

    //  Acción suma
    const sumar = () => {
        if (valor < item.stock) setValor(valor + 1);
    };

    //  Acción resta
    const restar = () => {
        if (valor > inicial) setValor(valor - 1);
    };

    //  Valor inicial
    useEffect(() => {
        setValor(inicial);
    }, []);

    //  Renderiza
    return (
        <>
        <div className='col-5 m-3 p-3 div-item-detail-counter'>
            {!agregado ? (
                <div>
                    <button
                        className='boton-accion'
                        title = 'Restar 1'
                        onClick={restar}
                        disabled={valor <= 1 || item.stock <= 0}
                    >
                        <i className='fas fa-arrow-down'></i>
                    </button>

                    <span className='p-2 text-white text-2xl'>{valor}</span>

                    <button
                        className='boton-accion'
                        title = 'Sumar 1'
                        onClick={sumar}
                        disabled={valor === item.stock ? true : null || item.stock <= 0}
                    >
                        <i className='fas fa-arrow-up'></i>
                    </button>
                </div>
            ) : (
                <span className='text-white'>
                    Se agregaron {valor} unidad(es).
                </span>
            )}
        </div>

        <div>
            <AgregarAlCarrito
                item={item}
                cantidad={valor}
                onAdd={onAdd}
            />
            <Link to={`/categoria/${item.categoria}`}>
                <Button>
                    Ir a cervezas {item.categoria}
                </Button>
            </Link>
        </div>
        </>
    );
};

export default ItemDetailCounter;
