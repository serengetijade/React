import React, { ChangeEvent, useState } from 'react';
function InputHandler() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    var result = <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>Input Value: {inputValue}</p>
    </div>

    return result;
}

export default InputHandler;