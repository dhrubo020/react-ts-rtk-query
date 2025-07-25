import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slices/counter';
import type { RootState } from '../../redux/store';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    console.log('rendering Counter component');
    return (
        <div>
            <h1>Counter Component</h1>
            <p>value: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            {/* Counter functionality will be implemented here */}
        </div>
    );
};
export default Counter;
