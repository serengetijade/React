import React, { MouseEvent } from "react";

function MultipleEventHandler() {
    const handleClick = () => {
        console.log("Multiple event button clicked.");
    };

    const handleMouseOver = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Mouse over button.");
        event.currentTarget.style.backgroundColor = "lightgreen";
    };

    const handleMouseOut = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Mouse out button.");
        event.currentTarget.style.backgroundColor = "";
    };

    return (
        <div>
            <button
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Hover or Click Me!
            </button>
        </div>
    );
}

export default MultipleEventHandler;  