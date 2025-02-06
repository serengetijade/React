import React, { useState, ChangeEvent, FormEvent } from 'react';

function FormHandler() {
    const [name, setName] = useState('');
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();//prevent page reload on form submit
        alert(`Form submitted with name: ${name}`);
    }

    var result =
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Please enter your name"
            />
            <button type="submit">Submit</button>
        </form>

    return result;
}

export default FormHandler;