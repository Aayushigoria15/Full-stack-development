import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './Store';

function Selector() {

    const count = useSelector((state) => state.counter.count); // Read state
    const dispatch = useDispatch(); // Dispatch actions

    return (
        <div style={{ padding: '30px' }}>
            <h2>Redux Counter: {count}</h2>
            <button onClick={() => dispatch(increment())} style={{ marginRight: '10px' }}>Increment</button>
            <button onClick={() => dispatch(decrement())} style={{ marginRight: '10px' }}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Selector
