
import { useRef, useState } from 'react';

function Ref() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const zero = () => {
        setCount(0);
    };

    // This won't trigger re-render
    renderCount.current += 1;

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Counter: {count}</h2>
            <button style={{ margin: '10px' }} onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button style={{ margin: '10px' }} onClick={zero}>Zero</button>
            <p>Render Count (tracked by useRef): {renderCount.current}</p>
        </div>
    );
}

export default Ref;
