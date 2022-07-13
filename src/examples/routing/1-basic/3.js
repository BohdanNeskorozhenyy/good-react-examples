/* Core */
import {
    Routes, Route, Navigate, Outlet, useNavigate,
} from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <button onClick = { () => navigate('/') }>Home</button>
                <button onClick = { () => navigate('/about') }>About</button>
                <button onClick = { () => navigate('/contacts') }>Contacts</button>
            </nav>

            { /* Placeholder component */ }
            <Outlet />
        </>
    );
};

const Example = () => {
    return (
        <Routes>
            <Nav>
                <Route path = '/' element = { <h1>Home</h1> } />
                <Route path = '/about' element = { <h1>About</h1> } />
                <Route path = '/contacts' element = { <h1>Contacts</h1> } />

                { /* Redirect if no route match found. */ }
                <Route path = '*' element = { <Navigate to = '/' /> } />
            </Nav>
        </Routes>
    );
};

export default Example;
