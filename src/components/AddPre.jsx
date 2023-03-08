import { useState } from "react";

export const AddPre = ({onAddPrecio}) => {

    const [inputPrecio, setinputPrecio] = useState('...')

    
    const onInputPrecio = (evt) => {
        setinputPrecio(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddPrecio(inputPrecio);
        setinputPrecio('')
    }

    return (
        <form onSubmit={(event => onSubmit(event))}>
            <input
                id="precio"
                type="text"
                value={inputPrecio}
                onChange={(event => onInputPrecio(event))}
            />

        </form>
    )
}