/* Core */
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    NavLink,
} from 'react-router-dom';

/* Components */
import { About } from './components';
import { Wizard } from './Wizard';

export default () => {
    return (
        <Router>
            <nav>
                <NavLink to = '/order'>Заказ</NavLink>&nbsp;
                <NavLink to = '/about'>О магазине</NavLink>
            </nav>
            <Routes>
                <Route path = '/order/*' element = { <Wizard /> } />

                <Route path = '/about' element = { <About /> } />

                <Route path = '*' element = { <Navigate to = '/order' /> } />
            </Routes>
        </Router>
    );
};
