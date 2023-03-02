import { useState } from "react";

export const ComponentApp = () => {

    const [numbers, setNumbers] = useState(['']);
    const [precios, setPrecios] = useState(['']);
    
    const onAddNumber = (e) => {
        e.preventDefault();
        setNumbers(list => [...list, numbers])
    }
    const onAddPrecio = (e) => {
        e.preventDefault();
        setPrecios(list => [...list, precios])
    }
    
    /*const priceT = precios.map((preciosT) => preciosT[0].priceT);
    const sum = priceT.reduce((a,b) => a + b, 0)
    console.log(sum);*/

    const onSetNumbers = (evt) =>{
        setNumbers(evt.target.value)
    }

    const onSetPrecios = (evt) =>{
        setPrecios(evt.target.value)
    }

    return (
        <>
            <h1>Chances</h1>
            <input type="text" value={numbers} onChange={(event) => onSetNumbers(event)}/>
            <button onClick={() => onAddNumber()} type='button'> Añadir Número </button>
            <p>Listado de Números</p>
            <ol>
                {
                    /*numbers.map(
                        (category, key) =>
                            {
                            return <li key={key}> {category}</li>
                            }
                    )*/
                }
            </ol>
            <input type="text" value={precios} onChange={(event) => onSetPrecios(event)}/>
            <button onClick={() => onAddPrecio()} type='button'> Añadir Precio </button>
            <p>Listado de Precios</p>
            <ol>
                {
                    /*precios.map(
                        (category, key) =>
                            {
                            return <li key={key}> {category}</li>
                            }
                    )*/
                }
            </ol>
        </>
    )
}

/*

<ol>
                {
                    numbers.map(
                        (number, key) =>
                            {
                            return <li key={key}> {number}</li>
                            }
                    )
                }
            </ol>

*/