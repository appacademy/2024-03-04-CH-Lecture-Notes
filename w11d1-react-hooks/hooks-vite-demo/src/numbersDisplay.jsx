import { useState } from "react";

function NumbersDisplay() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <>
            <h2>Current Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <br />

            <button onClick={decrement}>Decrement</button>
            <br />

            <button onClick={reset}>Reset!</button>
            <br />
        </>
    )
}

export default NumbersDisplay;