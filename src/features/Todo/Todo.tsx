import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../../redux/slices/todo/api';
import type { AppDispatch, RootState } from '../../redux/store';

const Todo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isError, isLoading } = useSelector(
    (state: RootState) => state.todo
  );

  return (
    <div>
      <h1>Todo List</h1>

      <button onClick={() => dispatch(getTodos())}>Get Todos</button>
      <div
        style={{
          height: '200px',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        {isLoading && <p>Loading todos...</p>}
        {isError}
        {data && (
          <ul>
            {data.map((todo: { id: number; title: string }) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Todo;
