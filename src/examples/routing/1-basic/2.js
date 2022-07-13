/* Core */
import {
    Routes, Route, NavLink, Navigate,
} from 'react-router-dom';

const Example = () => {
    return (
        <>
            <nav>
                <NavLink to = '/' end>
                    Home
                </NavLink>
                <NavLink to = '/about'>About</NavLink>
                <NavLink to = '/contacts'>Contacts</NavLink>
            </nav>

            <Routes>
                <Route path = '/' element = { <h1>Home</h1> } />
                <Route path = '/about' element = { <h1>About</h1> } />
                <Route path = '/contacts' element = { <h1>Contacts</h1> } />

                { /* Redirect if no route match found. */ }
                <Route path = '*' element = { <Navigate to = '/' /> } />
            </Routes>
        </>
    );
};

export default Example;
