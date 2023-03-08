import { useState } from "react";

export const AddNumber = ({onAddNumber}) => {

    const [inputNumber, setinputNumber] = useState('...')

    const onInputNumber = (evt) => {
        setinputNumber(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddNumber(inputNumber);
        setinputNumber('')
    }

    return (
        <form onSubmit={(event => onSubmit(event))}>
            <input
                id="number"
                type="text"
                value={inputNumber}
                onChange={(event => onInputNumber(event))}
            />

        </form>
    )
}