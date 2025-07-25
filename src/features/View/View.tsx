import { useSelector } from 'react-redux';

const View = () => {
    const count = useSelector((state: any) => state.counter.value);
    console.log('rendering View component');
    return (
        <div>
            <h1>View Component</h1>
            <p>{count}</p>
            <p>This is the view component of the application.</p>
        </div>
    );
};

export default View;
