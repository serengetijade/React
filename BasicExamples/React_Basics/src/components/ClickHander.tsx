function ClickHandler() {
    const handleClick = () => { alert('Button clicked!') };
    var result = <button onClick={handleClick}>Click Me</button>
    return result;
}

export default ClickHandler;