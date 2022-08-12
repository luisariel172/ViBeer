
//
//	Renderiza contador de un item
//

import './index.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

//  Botón comprar
import { BotonComprar } from '../'

const ItemDetailCounter = ({ stock, inicial }) => {

    //  valor del contador
    const [valor, setValor] = useState(inicial);

    //  Acción suma
    const sumar = () => {
        if (valor < stock) setValor(valor + 1);
    };

    //  Acción resta
    const restar = () => {
        if (valor > inicial) setValor(valor - 1);
    };

    //  Valor inicial
    useEffect(() => {
        setValor(inicial);
    }, [inicial]);

    //  Renderiza
    return (
        <>
        <div className='col-5 m-3 p-3 div-item-detail-counter'>

            <button
                className='boton-accion'
                datatoggle = 'tooltip'
                dataplacement = 'top'
                title = 'Restar 1'
                onClick={restar}
                disabled={valor <= 1 || stock <= 0}
            >
               <i className='fas fa-arrow-down'></i>
            </button>

            <span className='p-2 text-white text-2xl'>{valor}</span>

            <button
                className='boton-accion'
                datatoggle = 'tooltip'
                dataplacement = 'top'
                title = 'Sumar 1'
                onClick={sumar}
                disabled={valor === stock ? true : null || stock <= 0}
            >
               <i className='fas fa-arrow-up'></i>
            </button>

        </div>

        <div>
            <BotonComprar valor={valor}/>
        </div>
        </>
    );
};

export default ItemDetailCounter;
