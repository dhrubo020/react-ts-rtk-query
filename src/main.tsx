import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Counter from './features/counter/Counter.tsx';
import Post from './features/Posts/Posts.tsx';
import './index.css';
import { store } from './redux/store.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        children: [
            {
                path: '/',
                element: <Post />,
            },
            {
                path: '/counter',
                element: <Counter />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
