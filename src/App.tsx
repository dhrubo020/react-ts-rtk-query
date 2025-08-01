import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { store } from './redux/store';
import AppRoutes from './routes/AppRoute';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
