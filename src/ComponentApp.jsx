import { useState } from "react";
//import index from "index.css";

export const ComponentApp = () => {

    const [numbers, setNumbers] = useState('');
    const [precios, setPrecios] = useState('');
    const [chances, setChances] = useState([ ]);
    
    const onSetNumbers = (evt) =>{
        setNumbers(evt.target.value)
    }

    const onSetPrecios = (evt) =>{
        setPrecios(evt.target.value)
    }

    const precioTotal = () =>{
        let total = 0;
        chances.forEach((chance) => (total += parseInt(chance.precios)));
        return total;
    }

    const onAdd = () => {
        //e.preventDefault();
        if (numbers.length < 3 || numbers.length > 4){
            alert('El número del chance debe tener 3 o 4 dígitos');
        }else{
            setChances([...chances, {numbers,precios}]);
            setNumbers('');
            setPrecios('');
        }
        //setNumbers(list => [...list, numbers])df
    }

    return (
        <>
            <h1 className="titulo">Chance App</h1>
            <p>Digite el número del chance:</p>
            <input type="number" value={numbers} onChange={(event) => onSetNumbers(event)}/>
            <p>Digite el valor del chance:</p>
            <input type="number" value={precios} onChange={(event) => onSetPrecios(event)}/>
            <br/>
            <button onClick={() => onAdd()} type='button'> Añadir Chance</button>
            <h2>Historial</h2>
            <ol>
                {
                    chances.map(
                        (chance) =>
                            {
                            return <li key={chance.number}>
                                <p>Número: { chance.numbers }, Valor: { chance.precios }</p>
                            </li>
                            }
                    )
                }
            </ol>
            <br/>
            <p>Total a Pagar: {precioTotal()}</p>
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