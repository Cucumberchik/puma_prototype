
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextPuma from './components/context/context';
import AdminContext from './components/context/admins';
import DetailsContext from './components/context/detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContextPuma>
            <AdminContext>
                <DetailsContext>
                    <App />
                </DetailsContext>
            </AdminContext>
        </ContextPuma>
    </BrowserRouter>
);

